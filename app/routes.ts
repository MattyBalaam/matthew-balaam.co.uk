import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("cv", "routes/cv/cv.tsx", [
      route(":experience", "routes/cv/experience-details.tsx"),
    ]),
    route("music", "routes/music.tsx"),
  ]),
] satisfies RouteConfig;
