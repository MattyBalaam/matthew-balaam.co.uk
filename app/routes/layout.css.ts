import { style } from "@vanilla-extract/css";
import { dimensions } from "~/css/theme.css";

export const nav = style({
  display: "flex",
  inset: "0 0 auto 0",
  background: "rgb(55 55 55 / 0.8)",
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
  padding: "0.5em 1em",
  display: "inline-block",
  color: "white",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      background: "rgb(100 100 100 / 0.8)",
    },
    "&:visited": {
      color: "white",
    },
  },
});
