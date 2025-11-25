import { style } from "@vanilla-extract/css";

import { dimensions, vars } from "~/css/theme.css";

export const image = style({
  height: "3em",
  width: "3em",
  marginInlineStart: "-0.33em",
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
  paddingBlockStart: "0.5em",
  fontSize: vars.headerSize,
});
