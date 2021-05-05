import * as React from "react";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../redux/actions/categories";

import styles from "./CategoriesList.module.css";

export default function CategoriesList() {
  // получаем все категории
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
    return () => {};
  }, []);
  const {
    categories,
    isLoadingCategories,
    isErrorCategories,
    errorMessage,
  } = useAppSelector((state) => state.categories);

  // делаем необходимое для выделения текущей категории
  let history = useHistory();
  const { id } = useAppSelector((state) => state.categories.category);
  let activeId = id;

  // генерим список категорий
  let data = Array.isArray(categories) ? categories : [];
  const Items = data.map((d) => (
    <a
      className={
        d.id == activeId
          ? styles.listItem + " " + styles.active
          : styles.listItem
      }
      key={d.id}
      onClick={() => {
        history.push("/category/" + d.url);
        window.scrollTo(0, 0);
      }}
    >
      {d.title}
    </a>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.title}>Категории</div>
      {isLoadingCategories ? "🤖 Загрузка..." : ""}
      {isErrorCategories ? "😥 " + errorMessage : ""}
      {!isErrorCategories && !isLoadingCategories ? (
        <div className={styles.list}>{Items}</div>
      ) : (
        ""
      )}
    </div>
  );
}
