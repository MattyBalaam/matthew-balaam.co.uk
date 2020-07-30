import React from "react";
import Linkatron from "../Linkatron/Linkatron";

import styles from "./Download.module.css";

const Download = () => (
  <aside className={styles.downloadPDF}>
    <Linkatron
      className={styles.link}
      href={`${process.env.PUBLIC_URL}/pdf/Matthew-Balaam_Developer.pdf`}
      children={
        <>
          <span className={styles.text}>Download CV as PDF</span>
          <span className={styles.icon} />
        </>
      }
    />
  </aside>
);

export default Download;
