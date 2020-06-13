import React, { useEffect } from "react";
import styles from "./ProductsGrid.css";
import Card from "../ProductCard/ProductCard";

export default function ProductsGrid(props) {
  let data = Array.isArray(props.products) ? props.products : [];
  const products = data.map((d) => (
    <Card key={d.id} id={d.id} title={d.title} img={d.img} price={d.price} />
  ));

  return <div className={styles.grid}>{products}</div>;
}
