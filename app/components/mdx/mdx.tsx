import type { MDXContent } from "mdx/types";

import { Paragraph } from "~/components/typography/typography";

import * as styles from "./mdx.css";

export const MdxFormatter = ({ md: Markdown }: { md: MDXContent }) => (
  <Markdown
    components={{
      h1: (props) => <h1 className={styles.h1} {...props} />,
      // add more as needed
      p: Paragraph,
    }}
  />
);
