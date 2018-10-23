import React from "react";
import PropTypes from "prop-types";
import Grid from "js/Grid/Grid";
import SectionHeader from "js/SectionHeader/SectionHeader";

import Item from "./Item";

import styles from "./Technologies.module.css";

export default class Technologies extends React.Component {
  static propTypes = {
    tech: PropTypes.array.isRequired
  };
  render() {
    const { tech } = this.props;
    return (
      <Grid Component={React.article}>
        <SectionHeader>Technologies</SectionHeader>
        <ul className={`${styles.list} section__content`}>
          {tech.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </Grid>
    );
  }
}
