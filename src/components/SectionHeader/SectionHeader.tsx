import React, { ReactNode, ReactType } from "react";
import styles from "./SectionHeader.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  Component?: ReactType;
};

const SectionHeader = ({ children, className, Component = "h2" }: Props) => (
  <Component className={`${styles.header} ${className ? className : ""}`}>
    {children}
  </Component>
);

export default SectionHeader;
