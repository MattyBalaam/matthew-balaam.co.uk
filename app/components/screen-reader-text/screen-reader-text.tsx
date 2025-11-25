import * as styles from "./screen-reader-text.css";

export function ScreenReaderText({ children }: { children: React.ReactNode }) {
  return <span className={styles.srOnly}>{children}</span>;
}
