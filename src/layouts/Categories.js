import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryByUrl } from "../redux/actions/categories";

import CategoriesList from "../components/CategoriesList/CategoriesList";
import CategoryDescription from "../components/CategoryDescription/CategoryDescription";
import ProductsByCategory from "../components/ProductsByCategory/ProductsByCategory";

import styles from "./Categories.css";

export default function CategoriesProducts() {
  // получаем текущую категорию по url
  let categoryUrl = useParams().url;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryByUrl(categoryUrl));
    return () => {};
  }, [categoryUrl]);

  return (
    <div className={styles.container}>
      <CategoriesList />
      <div className={styles.content}>
        <CategoryDescription />
        <ProductsByCategory />
      </div>
    </div>
  );
}
