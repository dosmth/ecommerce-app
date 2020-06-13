import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import styles from "./ProductsByCategory.css";

import ProductsGrid from "../ProductsGrid/ProductsGrid";

export default function ProductsByCategory() {
  const dispatch = useDispatch();
  // получаем текущую категорию
  const { category } = useSelector((state) => state.categories);
  let categoryId = category.id;
  // получаем товары для текущей категории
  useEffect(() => {
    if (categoryId) {
      dispatch(getProducts(categoryId));
    }
    return () => {};
  }, [categoryId]);

  const { products_by_category, isLoading, isError } = useSelector(
    (state) => state.products
  );

  return (
    <>
      <div className={styles.title}>
        {isLoading ? "🤖 Загрузка..." : ""}
        {isError ? "😥 Ошибка" : ""}
      </div>
      {!isLoading ? <ProductsGrid products={products_by_category} /> : ""}
    </>
  );
}
