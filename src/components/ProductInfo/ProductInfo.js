import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./ProductInfo.css";
import prettyPrice from "../../common/prettyPrice";

export default function ProductInfo(props) {
  let history = useHistory();

  const { title, img, price, descr, categoryTitle, categoryUrl } = props;
  let img_url =
    img == "none"
      ? "/static/products/placeholder.jpg"
      : "/static/products/" + img;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <a
          className={styles.category}
          onClick={() => {
            history.push("/category/" + categoryUrl);
            window.scrollTo(0, 0);
          }}
        >
          {categoryTitle} /
        </a>
        <div className={styles.title}>{title}</div>
        {/* <div className={styles.img}>
          <img src={img_url} />
        </div> */}
        <div className={styles.bgImgContainer}>
          <div
            className={styles.bgImg}
            style={{ backgroundImage: "url('" + img_url + "')" }}
          ></div>
        </div>
        <div className={styles.price}>{prettyPrice(price)}р.</div>
        <div className={styles.descr}>Описание:</div>
        <div className={styles.descr}>{descr}</div>
      </div>
    </div>
  );
}
