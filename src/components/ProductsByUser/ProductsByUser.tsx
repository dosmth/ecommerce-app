import * as React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import ProductsGrid from "../ProductsGrid/ProductsGrid";

import styles from "./ProductsByUser.module.css";

export default function ProductsByUser() {
  const { products_by_user, isLoading, isError } = useAppSelector(
    (state) => state.products
  );

  return (
    <>
      <div className={styles.title}>
        {isLoading ? "🤖 Загрузка..." : ""}
        {isError ? "😥 Ошибка" : ""}
      </div>
      {!isLoading ? <ProductsGrid products={products_by_user} /> : ""}
    </>
  );
}
