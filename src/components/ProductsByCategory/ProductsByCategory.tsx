import * as React from "react";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getProducts } from "../../redux/actions/products";
import styles from "./ProductsByCategory.module.css";

import ProductsGrid from "../ProductsGrid/ProductsGrid";

export default function ProductsByCategory() {
  const dispatch = useAppDispatch();
  // получаем текущую категорию
  const { category } = useAppSelector((state) => state.categories);
  let categoryId = category.id;
  // получаем товары для текущей категории
  useEffect(() => {
    if (categoryId) {
      dispatch(getProducts(categoryId));
    }
    return () => {};
  }, [categoryId]);

  const { products_by_category, isLoading, isError } = useAppSelector(
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
