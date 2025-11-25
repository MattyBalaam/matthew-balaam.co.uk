import type { ReactNode } from "react";
import Linkify from "linkify-react";

import { Link } from "~/components/link/link";
import { classes } from "~/utilities/classes";

import * as styles from "./typography.css";

export interface ParagraphsProps {
  children?: Array<string> | string;
}

const NEW_PARAGRAPH_INDICATOR = "\n\n";

interface ParagraphProps {
  children: ReactNode;
  maskable?: boolean;
  variant?: keyof typeof styles.variants;
}

export function Paragraph({
  children,
  variant = "default",
  maskable,
}: ParagraphProps) {
  return (
    <p className={classes([styles.paragraph, styles.variants[variant]])}>
      <Linkify
        options={{
          defaultProtocol: "https",
          render: ({ attributes, content }) => (
            <Link {...attributes} maskable={maskable}>
              {content}
            </Link>
          ),
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
  variant,
}: Pick<ParagraphProps, "maskable" | "variant" | "children">) {
  if (!children) {
    return null;
  }

  // Convert any strings containing double newline to separate paragraphs.
  const normalisedValues = (
    Array.isArray(children) ? children : [children]
  ).flatMap((val: string) => val.split(NEW_PARAGRAPH_INDICATOR));

  return normalisedValues.map((text: string) => (
    <Paragraph key={text} maskable={maskable} variant={variant}>
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
