import type { ReactNode } from "react";
import * as styles from "./typography.css";
import { StringToLink } from "../string-to-link";
import { classes } from "~/utility/classes";

export interface ParagraphsProps {
  children?: Array<string> | string;
}

const NEW_PARAGRAPH_INDICATOR = "\n\n";

interface ParagraphProps {
  children: ReactNode;
  bottomMargin?: boolean;
}

export function Paragraph({ children, bottomMargin = false }: ParagraphProps) {
  return (
    <p
      className={classes([
        styles.paragraph,
        bottomMargin && styles.bottomMargin,
      ])}
    >
      <StringToLink>{children}</StringToLink>
    </p>
  );
}

export function Paragraphs({ children }: ParagraphsProps) {
  if (!children) {
    return null;
  }

  // Convert any strings containing double newline to separate paragraphs.
  const normalisedValues = (
    Array.isArray(children) ? children : [children]
  ).flatMap((val: string) => val.split(NEW_PARAGRAPH_INDICATOR));

  return normalisedValues.map((text: string) => (
    <Paragraph key={text}>{text}</Paragraph>
  ));
}

export function TextList({
  children,
  variant = "sans",
  className,
}: {
  children: Array<ReactNode>;
  variant?: "serif" | "sans";
  className?: string;
}) {
  return (
    <ul
      className={classes([className, variant === "serif" && styles.paragraph])}
    >
      {children.map((child, index) => (
        <li
          className={styles.item}
          key={typeof child === "string" ? child : index}
        >
          <span className={styles.itemText}>{child}</span>
        </li>
      ))}
    </ul>
  );
}
