import { style, styleVariants, type StyleRule } from "@vanilla-extract/css";

import { dimensions, vars } from "~/css/theme.css";

const printAndBreakHorizontalMin = (rule: StyleRule) => ({
  "@container": {
    [dimensions.breakHorizontalMin]: rule,
  },
  "@media": {
    print: rule,
  },
});

export const grid = style({
  display: "grid",
  gap: `${vars.rhythmVertical} ${vars.columnGap}`,
  gridTemplateColumns: "1fr",
  ...printAndBreakHorizontalMin({
    gridTemplateColumns: "[start] 1fr [main] 1fr [sub] 1.5fr 1.5fr [end]",
  }),
});

export const divider = style({});

export const gridChildVariant = styleVariants({
  start: printAndBreakHorizontalMin({
    gridColumn: "start",
  }),
  main: {
    position: "relative",
    display: "grid",
    gap: `${vars.rhythmVertical} ${vars.columnGap}`,
    ...printAndBreakHorizontalMin({
      gridTemplateColumns: "subgrid",
      gridColumn: "main / end",
    }),
    selectors: {
      [`&.${divider}::before`]: {
        content: "",
        position: "absolute",
        insetInlineStart: 0,
        insetBlockStart: "-0.45rem",
        width: "100%",
        borderBlockStart: vars.sectionDecoration,
      },
    },
  },
  mainToSub: printAndBreakHorizontalMin({
    gridColumn: "main / sub",
  }),
  sub: printAndBreakHorizontalMin({
    gridColumn: "sub / end",
  }),
});
