import { style } from "@vanilla-extract/css";
import { dimensions, vars } from "./css/theme.css";

export const body = style({
  color: vars.colorBody,
  fontFamily: "Theinhardt, sans-serif",
  lineHeight: vars.lineHeightBody,
  margin: vars.bodyMargin,
  padding: 0,
  minHeight: "100lvh",
  "@media": {
    [dimensions.breakHorizontalMin]: {
      paddingTop: "6em",
    },
  },
});

export const html = style({
  fontSize: "17px",
  background: "#aaa",
  "@media": {
    print: {
      fontSize: "9pt",
      width: "210mm",
      height: "297mm",
    },
  },
});
