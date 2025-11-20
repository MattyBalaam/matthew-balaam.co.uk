import { dimensions, vars } from "~/css/theme.css";
import { style } from "@vanilla-extract/css";

export const image = style({
  height: "3em",
  width: "3em",
  marginLeft: "-0.33em",
});

export const profiles = style({
  "@media": {
    [`print, ${dimensions.breakHorizontalMin}`]: {
      whiteSpace: "nowrap",
      textAlign: "right",
    },
  },
});

export const name = style({
  paddingTop: "0.5em",
  fontSize: vars.headerSize,
});

export const addressLine = style({
  display: "block",
});
