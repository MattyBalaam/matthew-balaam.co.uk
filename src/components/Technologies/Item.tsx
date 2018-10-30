import React from "react";
import styles from "./Item.module.css";
type ItemProps = {
  item: string;
};
export default class Item extends React.PureComponent<ItemProps, {}> {
  render() {
    const { item } = this.props;
    return (
      <li className={styles.item}>
        <span className={styles.itemText}>{item}</span>
      </li>
    );
  }
}
