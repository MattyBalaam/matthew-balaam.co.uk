import { style } from "@vanilla-extract/css";

import { dimensions, vars } from "~/css/theme.css";

export const role = style({
  marginBottom: vars.rhythmVertical,
});

export const header = style({
  marginBottom: 0,
});

export const title = style({
  marginBottom: "1.35rem",
});

export const website = style({
  "@media": {
    [dimensions.breakVerticalMax]: {
      marginBottom: "1.35rem",
    },
  },
});

// We only want to hide "See more" when printing
export const seeMore = style({
  "@media": {
    print: {
      display: "none",
    },
  },
});
