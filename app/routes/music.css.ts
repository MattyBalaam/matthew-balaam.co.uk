import { style } from "@vanilla-extract/css";
import { vars } from "~/css/theme.css";

export const layout = style({
  display: "grid",
  gap: `${vars.rhythmVertical2} ${vars.columnGap}`,
});

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
  borderTop: vars.sectionDecoration,
  padding: vars.rhythmVerticalHalf,
});

export const listenMatey = style({
  verticalAlign: "middle",
  padding: "0.5rem 1rem",
  textDecoration: "none",
  background: vars.colorFire,
  color: "white",
  selectors: {
    "&:hover": {
      background: vars.colorPrince,
    },
    "&::after": {
      content: '"  ▶"',
    },
  },
});
