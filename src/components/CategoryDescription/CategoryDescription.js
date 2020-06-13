import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CategoryDescription.css";

export default function CategoryDescription() {
  const {
    category,
    isLoadingCategory,
    isErrorCategory,
    errorMessage,
  } = useSelector((state) => state.categories);

  return (
    <div className={styles.title}>
      {isLoadingCategory ? "🤖 Загрузка..." : ""}
      {isErrorCategory ? "😥 " + errorMessage : ""}
      {category.id && !isLoadingCategory ? category.title : ""}
    </div>
  );
}
