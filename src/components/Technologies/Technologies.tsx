import React from "react";
import Grid from "../Grid/Grid";
import SectionHeader from "../SectionHeader/SectionHeader";
import Item from "./Item";
import styles from "./Technologies.module.css";

interface Props {
  tech: string[];
}

const Technologies = ({ tech }: Props) => (
  <Grid Component="article">
    <SectionHeader>Technologies</SectionHeader>
    <ul className={`${styles.list} section__content`}>
      {tech.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </ul>
  </Grid>
);

export default Technologies;
