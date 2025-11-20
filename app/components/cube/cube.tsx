import { type ReactNode } from "react";

import * as styles from "./cube.css";

export interface CubeProps {
  children: ReactNode;
}

export function Cube({ children }: CubeProps) {
  return (
    <main className={styles.cubeWrapper}>
      <div className={styles.cube}>{children}</div>
    </main>
  );
}
