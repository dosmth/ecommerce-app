import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsByUser } from "../redux/actions/products";

import UserContacts from "../components/UserContacts/UserContacts";
import ProductsByUser from "../components/ProductsByUser/ProductsByUser";

import styles from "./User.css";

export default function UserProducts() {
  // получаем инфомрацию о пользователе
  let userId = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByUser(userId));
    return () => {};
  }, []);

  return (
    <div className={styles.container}>
      <UserContacts userId={userId} />
      <div className={styles.content}>
        <div className={styles.title}>Товары</div>
        <ProductsByUser />
      </div>
    </div>
  );
}
