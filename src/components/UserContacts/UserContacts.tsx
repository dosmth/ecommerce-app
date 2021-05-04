import * as React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getUser } from "../../redux/actions/users";
import styles from "./UserContacts.module.css";

type Props = {
  userId: number;
};

export default function UserContacts(props: Props) {
  let history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser(props.userId));
    return () => {};
  }, []);

  const { user, isLoadingUser, isErrorUser, errorMessage } = useAppSelector(
    (state) => state.users
  );

  const userInfo = (
    <div>
      <div
        className={styles.userPic}
        onClick={() => {
          history.push("/user/" + user.id);
          window.scrollTo(0, 0);
        }}
      >
        <img
          src={
            user.img == "none"
              ? "/static/users/placeholder.jpg"
              : "/static/users/" + user.img
          }
        />
      </div>
      <div className={styles.list}>
        <a
          className={styles.listItem}
          onClick={() => {
            history.push("/user/" + user.id);
            window.scrollTo(0, 0);
          }}
        >
          {user.name}
        </a>
        <a
          className={styles.listItem}
          onClick={() => {
            window.location.href = "tel:" + user.phone;
          }}
        >
          {user.phone}
        </a>
        <div className={styles.listItem}>{user.addr}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>Пользователь</div>
      {isLoadingUser ? "🤖 Загрузка..." : ""}
      {isErrorUser ? "😥 " + errorMessage : ""}
      {!isErrorUser && !isLoadingUser ? userInfo : ""}
    </div>
  );
}
