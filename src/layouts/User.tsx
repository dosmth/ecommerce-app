import * as React from "react";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useParams } from "react-router-dom";
import { getProductsByUser } from "../redux/actions/products";

import UserContacts from "../components/UserContacts/UserContacts";
import ProductsByUser from "../components/ProductsByUser/ProductsByUser";

import styles from "./User.module.css";

interface ParamTypes {
  id: string;
}

export default function UserProducts() {
  // получаем инфомрацию о пользователе
  let userId = Number(useParams<ParamTypes>().id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsByUser(userId));
    return () => {};
  }, []);

  return (
    <div className={styles.container}>
      <UserContacts userId={userId} />
      <div className={styles.content}>
        <div className={styles.title}>Товары</div>
        <ProductsByUser />
      </div>
    </div>
  );
}
