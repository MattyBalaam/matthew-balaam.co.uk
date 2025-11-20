import { style } from "@vanilla-extract/css";
import { dimensions, vars } from "~/css/theme.css";

export const header = style({
  fontSize: vars.headerSize,
  fontFamily: vars.fontHeader,
  fontWeight: "lighter",
  whiteSpace: "nowrap",
  marginTop: `calc(-1 * ${vars.headerMarginTop})`,
  "@media": {
    [`${dimensions.breakHorizontalMin}, print`]: {
      marginTop: vars.headerMarginTop,
      textAlign: "right",
    },
  },
});
