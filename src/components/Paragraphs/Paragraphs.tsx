import React from "react";
import styles from "./Paragraphs.module.css";
import Linkatron from "../Linkatron/Linkatron";

export interface Props {
  source: string | string[];
  className?: string;
}

const NEW_PARAGRAPH_INDICATOR = "\n\n";

const Paragraphs = ({ source, className }: Props) => {
  // Convert any strings containg double newline to separate paragraphs.
  const normalisedValues: string[] = (Array.isArray(source) ? source : [source])
    .map((val: string) => val.split(NEW_PARAGRAPH_INDICATOR))
    .flatMap((val) => val);

  return (
    <div className={className}>
      {normalisedValues.map((text: string, i) => (
        <p className={styles.paragraph} key={i}>
          <Linkatron>{text}</Linkatron>
        </p>
      ))}
    </div>
  );
};

export default Paragraphs;
