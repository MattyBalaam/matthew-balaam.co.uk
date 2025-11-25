import { style } from "@vanilla-extract/css";

// We only want to hide "See more" when printing
export const seeMore = style({
  "@media": {
    print: {
      display: "none",
    },
  },
});
