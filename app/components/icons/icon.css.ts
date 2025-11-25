import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "~/css/theme.css";

export const icon = style({
  display: "inline-flex",
  width: "1em",
  height: "1em",
  color: vars.colorIce,
  alignItems: "baseline",
});

globalStyle(`${icon} > svg`, {
  width: "100%",
  height: "100%",
  fill: "currentColor",
});
