import React, { useRef, useState, useEffect, ReactNode } from "react";

import styles from "./Cube.module.css";

export interface Props {
  className: string;
  children: ReactNode;
}

const Cube = ({ children, className }: Props) => {
  const [cubeAnimClass, setCubeAnimClass] = useState(styles.loading);

  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cubeRef.current !== null) {
      cubeRef.current.addEventListener("animationend", () => {
        console.log("loaded");

        setCubeAnimClass(styles.loaded);
      });
    }
  }, [cubeRef]);

  console.log("cubeAnimClass", cubeAnimClass);

  return (
    <main className={`${className} ${styles.perspective}`}>
      <div ref={cubeRef} className={`${styles.cube} ${cubeAnimClass}`}>
        <div className={styles.face1} />
        <div className={styles.face2}>{children}</div>
      </div>
    </main>
  );
};

export default Cube;
