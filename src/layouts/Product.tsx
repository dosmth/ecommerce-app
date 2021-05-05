import * as React from "react";
import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useParams, useHistory } from "react-router-dom";
import { getProduct } from "../redux/actions/products";
// import { api_get_url_by_id } from "../api/categories";
import { getCategory } from "../redux/actions/categories";
import styles from "./Product.module.css";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import UserContacts from "../components/UserContacts/UserContacts";

interface ParamTypes {
  id: string;
}

export default function Product() {
  // получаем данные о товаре
  let productId = Number(useParams<ParamTypes>().id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProduct(productId));
    return () => {};
  }, [productId]);

  const { product, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.products
  );

  // получаем url категори товара
  // const [categoryUrl, setCategoryUrl] = useState("");
  // useEffect(() => {
  //   if (product.category) {
  //     api_get_url_by_id(product.category).then((data) => {
  //       setCategoryUrl(data.url);
  //     });
  //   }
  //   return () => {};
  // }, [product.category]);

  // получаем информацию о категории товара
  useEffect(() => {
    if (product.category_id) {
      dispatch(getCategory(product.category_id));
    }
    return () => {};
  }, [product.category_id]);
  const { category } = useAppSelector((state) => state.categories);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {isLoading ? "🤖 Загрузка..." : ""}
        {isError ? "😥 " + errorMessage : ""}
      </div>
      <div className={styles.grid}>
        {!isLoading && product.user_id ? (
          <UserContacts userId={product.user_id} />
        ) : (
          ""
        )}
        {!isLoading && typeof product.id !== "undefined" ? (
          <ProductInfo
            title={product.title}
            img={product.img}
            price={product.price}
            descr={product.descr}
            categoryTitle={category.title}
            categoryUrl={category.url}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
