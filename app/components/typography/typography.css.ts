import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "~/css/theme.css";

export const paragraph = style({
  fontFamily: "Calluna, serif",
  fontSize: "105%",
});

globalStyle(`${paragraph} + ${paragraph}:not(:first-of-type)`, {
  textIndent: "2ch",
});

export const bottomMargin = style({
  marginBottom: vars.rhythmVertical,
});

export const item = style({
  listStyle: "outside",
  color: vars.colorFire,
});

export const itemText = style({
  color: vars.colorBody,
});
