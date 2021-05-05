import * as React from "react";
import styles from "./ProductsGrid.module.css";
import Card from "../ProductCard/ProductCard";

type Props = {
  products: { id: number; title: string; img: string; price: number }[] | [];
};

export default function ProductsGrid(props: Props) {
  let data = Array.isArray(props.products) ? props.products : [];
  const products = data.map((d) => (
    <Card key={d.id} id={d.id} title={d.title} img={d.img} price={d.price} />
  ));

  return <div className={styles.grid}>{products}</div>;
}
