import React from "react";

import styles from "./Download.module.css";

const Download = () => (
  <aside className={styles.downloadPDF}>
    <a
      className={styles.link}
      href="Matthew-Balaam_Developer.pdf"
      target="_blank"
    >
      <>
        <span className={styles.text}>Download CV as PDF</span>
        <span className={styles.icon} />
      </>
    </a>
  </aside>
);

export default Download;
