import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsGrid from "../ProductsGrid/ProductsGrid";

import styles from "./ProductsByUser.css";

export default function ProductsByUser() {
  const { products_by_user, isLoading, isError } = useSelector(
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
