import * as React from "react";
import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useParams } from "react-router-dom";
import { getCategoryByUrl } from "../redux/actions/categories";

import CategoriesList from "../components/CategoriesList/CategoriesList";
import CategoryDescription from "../components/CategoryDescription/CategoryDescription";
import ProductsByCategory from "../components/ProductsByCategory/ProductsByCategory";

import styles from "./Categories.module.css";

interface ParamTypes {
  url: string
}

export default function CategoriesProducts() {
  // получаем текущую категорию по url
  let categoryUrl = useParams<ParamTypes>().url;
  const dispatch = useAppDispatch();
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
