import React, { createElement, cloneElement } from "react";
import ReactMarkdown, { renderers } from "react-markdown";
import mapValues from "lodash/mapValues";
import classes from "js/utility/classes";

import styles from "./MD.module.css";

const createRenderer = type => ({ children, ...props }) =>
  createElement(type, props, children);

const addBemToGetReactElement = (getReactEl, type) => props => {
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

const addBemToRenderers = (val, type) => {
  const renderer = typeof val === "function" ? val : createRenderer(val);
  return addBemToGetReactElement(renderer, type);
};

const bemRenderers = mapValues(renderers, addBemToRenderers);

const getCoercedString = v => {
  return typeof v.join === "function" ? v.join("\n\n") : v;
};

export default class MD extends React.Component {
  render() {
    const { source, ...props } = this.props;
    return (
      <ReactMarkdown
        {...props}
        source={getCoercedString(source)}
        renderers={bemRenderers}
      />
    );
  }
}
