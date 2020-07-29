import React from "react";
import styles from "./Item.module.css";

interface Props {
  item: string;
}

const Item = ({ item }: Props) => (
  <li className={styles.item}>
    <span className={styles.itemText}>{item}</span>
  </li>
);

export default Item;
