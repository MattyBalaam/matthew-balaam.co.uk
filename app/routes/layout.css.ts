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
    "&:hover": {
      background: "rgb(100 100 100 / 0.8)",
    },
    "&:visited": {
      color: "white",
    },
  },
});
