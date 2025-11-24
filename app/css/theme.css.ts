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
  sprungCubeEasing:
    "linear(0, 0.0016 0.54%, 0.0069, 0.0158, 0.0279 2.4%, 0.0626 3.72%, 0.1133 5.19%, 0.2247 7.82%, 0.4825 13.25%, 0.5975 15.8%, 0.7038 18.43%, 0.7926, 0.8664 23.55%, 0.8985, 0.9269, 0.9516 27.5%, 0.974, 0.9928, 1.0084 31.68%, 1.0273 33.93%, 1.0403 36.33%, 1.0479 38.96%, 1.05 41.9%, 1.0484 44.23%, 1.044 47.02%, 1.0126 61.27%, 1.0024 69.09%, 0.9992 74.2%, 0.9977 80.01%, 0.9991 100%)",
  sprungCubeDuration: "1.8s",
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
