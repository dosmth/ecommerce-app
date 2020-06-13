import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getProduct } from "../redux/actions/products";
// import { api_get_url_by_id } from "../api/categories";
import { getCategory } from "../redux/actions/categories";
import styles from "./Product.css";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import UserContacts from "../components/UserContacts/UserContacts";

export default function Product(props) {
  // получаем данные о товаре
  let productId = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productId));
    return () => {};
  }, [productId]);

  const { product, isLoading, isError, errorMessage } = useSelector(
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
    if (product.category) {
      dispatch(getCategory(product.category));
    }
    return () => {};
  }, [product.category]);
  const { category } = useSelector((state) => state.categories);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {isLoading ? "🤖 Загрузка..." : ""}
        {isError ? "😥 " + errorMessage : ""}
      </div>
      <div className={styles.grid}>
        {!isLoading && product.user ? (
          <UserContacts userId={product.user} />
        ) : (
          ""
        )}
        {!isLoading && product.id ? (
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
