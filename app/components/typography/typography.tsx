import { Link } from "~/components/link/link";
import { Maskable } from "~/components/maskable/maskable";
import { classes } from "~/utilities/classes";
import type { ReactNode } from "react";
import { useSearchParams } from "react-router";
import Linkify from "linkify-react";

import * as styles from "./typography.css";

export interface ParagraphsProps {
  children?: Array<string> | string;
}

const NEW_PARAGRAPH_INDICATOR = "\n\n";

interface ParagraphProps {
  children: ReactNode;
  bottomMargin?: boolean;
  maskable?: boolean;
}

export function Paragraph({
  children,
  bottomMargin = false,
  maskable,
}: ParagraphProps) {
  const [searchParams] = useSearchParams();

  const mask = maskable && searchParams.get("mask") === "true";

  return (
    <p
      className={classes([
        styles.paragraph,
        bottomMargin && styles.bottomMargin,
      ])}
    >
      <Linkify
        options={{
          defaultProtocol: "https",
          render: ({ attributes, content }) => {
            if (mask) return <Maskable>{content}</Maskable>;

            return <Link {...attributes}>{content}</Link>;
          },
        }}
      >
        {children}
      </Linkify>
    </p>
  );
}

export function Paragraphs({
  children,
  maskable,
}: ParagraphsProps & { maskable?: boolean }) {
  if (!children) {
    return null;
  }

  // Convert any strings containing double newline to separate paragraphs.
  const normalisedValues = (
    Array.isArray(children) ? children : [children]
  ).flatMap((val: string) => val.split(NEW_PARAGRAPH_INDICATOR));

  return normalisedValues.map((text: string) => (
    <Paragraph key={text} maskable={maskable}>
      {text}
    </Paragraph>
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
