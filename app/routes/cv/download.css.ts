import { style } from "@vanilla-extract/css";

import { dimensions, vars } from "~/css/theme.css";

export const downloadPDF = style({
  color: "white",
  textAlign: "center",
  display: "inline-block",
  position: "absolute",
  insetInlineEnd: vars.bodyMargin,
  "@media": {
    print: {
      display: "none",
    },
    [dimensions.breakHorizontalMin]: {
      position: "fixed",
      zIndex: 10,
      transform: "rotate(45deg)",
      insetBlockStart: 0,
      insetInlineEnd: 0,
    },
  },
});

export const link = style({
  borderBlockStart: "2px solid white",
  borderBlockEnd: "2px solid white",
  boxSizing: "border-box",
  padding: "0.5rem 1rem",
  display: "block",
  width: "100%",
  color: "inherit",
  textDecoration: "none",
  background: vars.colorFire,
  selectors: {
    "&:hover": {
      background: vars.colorIce,
    },
  },
  "@media": {
    [dimensions.breakHorizontalMin]: {
      boxSizing: "unset",
      padding: "1rem 7em",
    },
  },
});

export const text = style({
  "@media": {
    [dimensions.breakHorizontalMin]: {
      display: "inline-block",
      verticalAlign: "middle",
      width: "6em",
    },
  },
});

export const icon = style({
  border: "2px solid",
  display: "inline-block",
  verticalAlign: "middle",
  position: "relative",
  fontStyle: "normal",
  color: "inherit",
  textAlign: "left",
  textIndent: "-9999px",
  direction: "ltr",
  width: "26px",
  height: "32px",
  borderRadius: "0 0 0 10px",
  margin: "1px 4px 1px 0.5em",
  "::before": {
    content: "",
    pointerEvents: "none",
    position: "absolute",
    width: 0,
    height: 0,
    insetInlineStart: "-3px",
    insetBlockEnd: "-3px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderBlockEndColor: "transparent",
    borderInlineStartColor: "transparent",
  },
  "::after": {
    content: "",
    pointerEvents: "none",
    width: "13px",
    height: "2px",
    boxShadow: "inset 0 0 0 32px, 0 -5px 0 0, 0 5px 0 0",
    position: "absolute",
    insetInlineStart: "50%",
    insetBlockStart: "50%",
    transform: "translate(-50%, -50%)",
  },
});
