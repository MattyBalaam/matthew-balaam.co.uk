import React from "react";
import PropTypes from "prop-types";

import styles from "./Item.module.css";

export default class Item extends React.PureComponent {
  static propTypes = {
    item: PropTypes.string.isRequired
  };
  render() {
    const { item } = this.props;
    return (
      <li className={styles.item}>
        <span className={styles.itemText}>{item}</span>
      </li>
    );
  }
}
