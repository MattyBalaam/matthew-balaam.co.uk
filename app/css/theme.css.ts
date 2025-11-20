import { createTheme } from "@vanilla-extract/css";

const palette = {
  colorBody: "rgba(0, 0, 0, 0.9)",
  colorSubtleOffWhite: "#fafcfa",
  colorIce: "#4db0c4",
  colorFire: "#c47333",
  colorPrince: "#c53fa6",
} as const;

export const [themeClass, vars] = createTheme({
  headerSize: "1.6rem",
  headerMarginTop: "0.15rem",
  lineHeightBody: "1.35rem",
  lineHeightHeader: "2.7rem",
  column: "auto",
  columnGap: "3em",
  fontInfo: '"Theinhardt", sans-serif',
  fontHeader: '"Theinhardt", sans-serif',
  ...palette,
  sectionDecoration: `0.075rem solid ${palette.colorIce}`,
  rhythmVertical: "1.35rem",
  rhythmVerticalHalf: "0.675rem",
  rhythmVertical2: "2.7rem",
  bodyMargin: "0",
});

// technically this is not part of the theme, but until media/container queries can use
// custom properties we can use this instead
export const dimensions = {
  breakHorizontalLargeMin: "(min-width: 1200px)",
  breakHorizontalMin: "(min-width: 1000px)",
  breakVerticalMax: "(max-width: 1000px)",
  breakMediumMin: "(min-width: 600px)",
  breakMediumMax: "(max-width: 599px)",
} as const;
