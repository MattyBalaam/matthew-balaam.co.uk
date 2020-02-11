import { createElement, cloneElement, ReactNode } from "react";
import { renderers, Renderer } from "react-markdown";
import classes from "../../../utility/classes";
import styles from "../MD.module.css";

export const getCoercedString = (v: string[] | string) => {
  if (typeof v === "string") {
    return v;
  }
  return v.reduce((prev, cur) => prev + "\n\n" + cur);
};

// simple Object.fromEntries polyfill. todo - move away from CRA so babel can be configured
const fromEntries = (l: any) =>
  l.reduce((a: object, [k, v]: (string | any)[]) => ({ ...a, [k]: v }), {});

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

const addBemToRenderer = (val: Renderer<any> | string, type: string) => {
  const renderer = typeof val === "function" ? val : createRenderer(val);
  return addBemToGetReactElement(renderer, type);
};

export const bemRenderers = fromEntries(
  Object.entries(renderers).map(([type, val]) => [
    type,
    addBemToRenderer(val, type)
  ])
);
