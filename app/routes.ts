import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.route.tsx"),
    route("cv", "routes/cv/cv.route.tsx", [
      route(":experience", "routes/cv/experience-details.route.tsx"),
    ]),
    route("music", "routes/music.route.tsx"),
    route("web-components", "routes/web-components.route.tsx"),
  ]),
] satisfies RouteConfig;
