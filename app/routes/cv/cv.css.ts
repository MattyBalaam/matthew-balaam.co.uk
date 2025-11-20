import { style } from "@vanilla-extract/css";
import { dimensions, vars } from "~/css/theme.css";

export const cvGrid = style({
  display: "grid",
  gap: `${vars.rhythmVertical2} ${vars.columnGap}`,
  "@media": {
    print: {
      width: "21cm",
      padding: "0.5cm 2cm",
      maxWidth: "none",
    },
  },
});

export const technologyList = style({
  columnCount: 3,

  whiteSpace: "nowrap",
  "@container": {
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
