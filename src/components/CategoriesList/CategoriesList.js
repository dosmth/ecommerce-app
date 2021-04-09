import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../redux/actions/categories";

import styles from "./CategoriesList.css";

export default function CategoriesList(props) {
  // получаем все категории
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    return () => {};
  }, []);
  const {
    categories,
    isLoadingCategories,
    isErrorCategories,
    errorMessage,
  } = useSelector((state) => state.categories);

  // делаем необходимое для выделения текущей категории
  let history = useHistory();
  const { id } = useSelector((state) => state.categories.category);
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
