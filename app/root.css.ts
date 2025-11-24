import { globalStyle, style } from "@vanilla-extract/css";
import { href } from "react-router";

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
  [`&.\\${href("/cv")}`]: {
    background: "#888",
  },
  "@media": {
    print: {
      fontSize: "9pt",
      width: "210mm",
      height: "297mm",
    },
  },
});

globalStyle(":link", {
  color: vars.colorIce,
});

globalStyle(":visited", {
  color: vars.colorPrince,
});

globalStyle("main", {
  display: "block",
});

globalStyle("ul,li,dl,dd,p,a,h1,h2,h3,h4,h5,h6", {
  padding: 0,
  margin: 0,
});

globalStyle("ul, ol", {
  listStyle: "none",
  paddingLeft: 0,
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
});
