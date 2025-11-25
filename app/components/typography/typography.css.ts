import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/css/theme.css";

export const paragraph = style({
  fontFamily: "Calluna, serif",
  fontSize: "105%",
});

export const variants = styleVariants({
  default: {
    selectors: {
      "&:not(:last-child)": {
        marginBlockEnd: vars.rhythmVertical,
      },
    },
  },
  indent: {
    selectors: {
      "& + &:not(:first-of-type)": {
        textIndent: "2ch",
      },
    },
  },
});

export const item = style({
  listStyle: "outside",
  color: vars.colorFire,
});

export const itemText = style({
  color: vars.colorBody,
});
