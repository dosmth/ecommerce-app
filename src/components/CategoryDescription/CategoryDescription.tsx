import * as React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import styles from "./CategoryDescription.module.css";

export default function CategoryDescription() {
  const {
    category,
    isLoadingCategory,
    isErrorCategory,
    errorMessage,
  } = useAppSelector((state) => state.categories);

  return (
    <div className={styles.title}>
      {isLoadingCategory ? "🤖 Загрузка..." : ""}
      {isErrorCategory ? "😥 " + errorMessage : ""}
      {category.id && !isLoadingCategory ? category.title : ""}
    </div>
  );
}
