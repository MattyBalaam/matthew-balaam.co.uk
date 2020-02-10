import React, { createElement, cloneElement, ReactNode } from "react";
import ReactMarkdown, { renderers } from "react-markdown";
import mapValues from "lodash/mapValues";
import classes from "../../utility/classes";
import styles from "./MD.module.css";

const createRenderer = (type: string) => ({
  children,
  ...props
}: {
  children: ReactNode;
  props?: any;
}) => createElement(type, props, children);

const addBemToGetReactElement = (
  getReactEl: Function,
  type: string
) => (props: {}) => {
  const el = getReactEl(props);
  if (typeof el === "string") {
    return el;
  }
  const className = classes([
    styles.md,
    styles[type] ? styles[type] : type,
    el.props.className ? el.props.className : null
  ]);
  return cloneElement(el, { ...el.props, className });
};
const addBemToRenderers = (val: Function | string, type: string) => {
  const renderer = typeof val === "function" ? val : createRenderer(val);
  return addBemToGetReactElement(renderer, type);
};
const bemRenderers = mapValues(renderers, addBemToRenderers);
const getCoercedString = (v: string[] | string) => {
  if (typeof v === "string") {
    return v;
  }
  return v.reduce((prev, cur) => prev + "\n\n" + cur);
};
export interface Props {
  source: string | string[];
  className?: string;
}

const MD = ({ source, ...props }: Props) => (
  <ReactMarkdown
    {...props}
    source={getCoercedString(source)}
    // renderers={bemRenderers}
  />
);

export default MD;
