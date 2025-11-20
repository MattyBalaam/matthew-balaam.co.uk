import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle(":link", {
  color: vars.colorIce,
});

globalStyle(":visited", {
  color: vars.colorPrince,
});

globalStyle("main", {
  display: "block",
});

globalStyle("ul,li,dl,dd,p,a,h1,h2,h3,h4,h5,h6", {
  padding: 0,
  margin: 0,
});

globalStyle("ul, ol", {
  listStyle: "none",
  paddingLeft: 0,
});
