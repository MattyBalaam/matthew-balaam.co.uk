import { style } from "@vanilla-extract/css";

import { dimensions, vars } from "~/css/theme.css";

export const nav = style({
  display: "flex",
  inset: "0 0 auto 0",
  background: vars.palette.stone,
  zIndex: 5,
  "@media": {
    [dimensions.breakHorizontalMin]: {
      position: "fixed",
    },
    print: {
      display: "none",
    },
  },
});

export const list = style({
  display: "flex",
  gap: "1rem",
});

export const item = style({
  height: "2em",
  display: "inline-grid",
  padding: "0 1em",
  alignItems: "center",
  color: "white",
  textDecoration: "none",
  verticalAlign: "text-top",
  selectors: {
    "&[popoverTarget]": {
      anchorName: "var(--anchorName)",
      font: "inherit",
      background: "none",
      border: "none",
      appearance: "none",
      margin: "0",
      outline: "none",
    },
    "&:hover": {
      background: "rgb(100 100 100 / 0.8)",
    },
    "&:visited": {
      color: "white",
    },
  },
});

export const sublist = style({
  background: vars.palette.stone,
  border: "none",
  top: "anchor(bottom)",
  left: "anchor(left)",
  positionAnchor: "var(--anchorName)",
});
