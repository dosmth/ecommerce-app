import * as React from "react";
import { useHistory } from "react-router-dom";
import styles from "./ProductCard.module.css";
import prettyPrice from "../../common/prettyPrice";

type Props = {
  id: number;
  title: string;
  img: string;
  price: number;
};

export default function ProductCard(props: Props) {
  let history = useHistory();
  let id = props.id;
  let title = props.title;
  let img = props.img;
  let img_url =
    img == "none"
      ? "/static/products/placeholder.jpg"
      : "/static/products/" + img;
  let price = props.price;

  return (
    <a
      className={styles.card}
      key={id}
      onClick={() => {
        history.push("/product/" + id);
        window.scrollTo(0, 0);
      }}
    >
      {/* <img className={styles.img} src={img_url} /> */}
      <div
        className={styles.bgImg}
        style={{ backgroundImage: "url('" + img_url + "')" }}
      ></div>
      <div className={styles.descr}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{prettyPrice(price)}р.</div>
      </div>
    </a>
  );
}
