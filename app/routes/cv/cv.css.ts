import { style } from "@vanilla-extract/css";

import { dimensions, vars } from "~/css/theme.css";

export const cvGrid = style({
  display: "grid",
  gap: `${vars.rhythmVertical2} ${vars.columnGap}`,
});

export const technologyList = style({
  columnCount: 2,
  whiteSpace: "nowrap",
  "@container": {
    [dimensions.breakMediumMin]: {
      columnCount: 3,
    },
    [dimensions.breakHorizontalMin]: {
      gridColumn: "main / end",
      columnCount: 4,
      gap: "6.8em",
    },
  },
  "@media": {
    print: {
      gridColumn: "main / end",
      columnCount: 4,
      gap: "6.8em",
    },
  },
});
