import { style } from "@vanilla-extract/css";

import { vars } from "~/css/theme.css";

export const button = style({
  appearance: "none",
  border: "none",
  padding: "0.5em 1em",
  backgroundColor: vars.palette.ice,
  color: "var(--mb-button-color, white)",
  fontSize: "1rem",
  borderRadius: "4px",
});
