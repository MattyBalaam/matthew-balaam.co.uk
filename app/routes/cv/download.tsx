import * as styles from "./download.css";

export function Download() {
  return (
    <aside className={styles.downloadPDF}>
      <a
        className={styles.link}
        href="Matthew-Balaam_Developer.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <>
          <span>Download CV as PDF</span>
          <span className={styles.icon} />
        </>
      </a>
    </aside>
  );
}
