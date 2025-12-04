import { href, Outlet } from "react-router";

import { Cube } from "~/components/cube/cube";
import { routeTypes, SiteNav } from "~/components/site-nav/site-nav";

export default function Layout() {
  return (
    <>
      <SiteNav
        routes={[
          { to: href("/"), label: "Home", type: routeTypes.link },
          { to: href("/cv"), label: "C.V.", type: routeTypes.link },
          { to: href("/music"), label: "Music", type: routeTypes.link },
          {
            label: "Experiments",
            type: routeTypes.group,
            links: [
              {
                to: href("/web-components"),
                label: "Web components",
                type: routeTypes.link,
              },
            ],
          },
          import.meta.env.DEV
            ? {
                label: "test",
                type: routeTypes.group,
                links: [
                  {
                    to: href("/web-components"),
                    label: "Test1  ",
                    type: routeTypes.link,
                  },
                  { to: href("/cv"), label: "Test2", type: routeTypes.link },
                ],
              }
            : [],
        ].flat()}
      />
      <Cube>
        <Outlet />
      </Cube>
    </>
  );
}
