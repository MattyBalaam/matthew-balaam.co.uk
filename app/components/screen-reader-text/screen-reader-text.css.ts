import { style } from "@vanilla-extract/css";

export const srOnly = style({
  // clip is deprecated but still needed for some browsers
  clip: "rect(0 0 0 0)",
  clipPath: "inset(100%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});
