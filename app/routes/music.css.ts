import { style } from "@vanilla-extract/css";

import { vars } from "~/css/theme.css";

export const posts = style({
  display: "grid",
  gap: vars.rhythmVertical,
});

export const post = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: vars.rhythmVerticalHalf,
  borderBlockStart: vars.sectionDecoration,
  paddingBlock: vars.rhythmVerticalHalf,
});

export const listenMatey = style({
  verticalAlign: "middle",
  padding: "0.5rem 1rem",
  textDecoration: "none",
  background: vars.palette.fire,
  color: "white",
  selectors: {
    "&:hover": {
      background: vars.palette.prince,
    },
    "&::after": {
      content: '"  ▶"',
    },
  },
});
