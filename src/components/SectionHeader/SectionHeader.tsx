import React from "react";
import styles from "./SectionHeader.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  Component?: React.ReactType;
};

const SectionHeader = ({ children, className, Component = "h2" }: Props) => (
  <Component className={`${styles.header} ${className ? className : ""}`}>
    {children}
  </Component>
);

export default SectionHeader;
