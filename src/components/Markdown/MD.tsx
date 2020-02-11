import React from "react";
import ReactMarkdown from "react-markdown";
import { getCoercedString, bemRenderers } from "./services/MD";

export interface Props {
  source: string | string[];
  className?: string;
}

const MD = ({ source, className }: Props) => (
  <ReactMarkdown
    className={className}
    source={getCoercedString(source)}
    renderers={bemRenderers}
  />
);

export default MD;
