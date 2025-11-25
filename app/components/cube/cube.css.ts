import {
  createContainer,
  globalKeyframes,
  globalStyle,
  style,
} from "@vanilla-extract/css";

import { dimensions, vars } from "~/css/theme.css";

globalKeyframes("cubeSpinIn", {
  "0%": {
    filter: "brightness(0.4) contrast(0.3)",
    transform:
      "perspective(1000px) rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(50%) rotateY(90deg)",
  },
  "100%": { transform: "perspective(1000px) rotateY(0)" },
});

globalKeyframes("cubeSpinOut", {
  "0%": {
    transform: "perspective(1000px) rotateY(0deg)",
  },
  "100%": {
    transform:
      " perspective(1000px) rotateY(-90deg) translate(-50%) rotateY(90deg) translate(-50%) rotateY(-90deg)",
    filter: "brightness(0.4) contrast(0.3)",
  },
});

globalStyle("::view-transition-new(cube)", {
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: [
        "cubeSpinIn",
        vars.sprungCubeDuration,
        "forwards",
        vars.sprungCubeEasing,
      ].join(" "),
      backfaceVisibility: "hidden",
      transformOrigin: "center center",
    },
  },
});

globalStyle("::view-transition-old(cube)", {
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: [
        "cubeSpinOut",
        vars.sprungCubeDuration,
        "forwards",
        "0.06s",
        vars.sprungCubeEasing,
      ].join(" "),
      backfaceVisibility: "hidden",
      transformOrigin: "center center",
    },
  },
});

export const cubeContainerName = createContainer();

export const cubeWrapper = style({
  maxWidth: "1200px",
  minHeight: "100lvh",
  margin: "auto",
  containerName: cubeContainerName,
  containerType: "size",
});

export const cube = style({
  background: vars.colorSubtleOffWhite,
  minHeight: "100lvh",
  padding: vars.bodyMargin,
  "@container": {
    [`${cubeContainerName} ${dimensions.breakHorizontalMin}`]: {
      padding: "4em",
      viewTransitionName: "cube",
    },
  },
});
