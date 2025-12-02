import { href, NavLink, Outlet, useLocation } from "react-router";

import { Cube } from "~/components/cube/cube";

import * as styles from "./layout.css";

const routes = [
  { to: href("/"), label: "Home", type: "link" },
  { to: href("/cv"), label: "C.V.", type: "link" },
  { to: href("/music"), label: "Music", type: "link" },
  {
    label: "Experiments",
    type: "group",
    links: [
      { to: href("/web-components"), label: "Web components", type: "link" },
    ],
  },
  // {
  //   label: "test",
  //   type: "group",
  //   links: [
  //     { to: href("/web-components"), label: "Web components", type: "link" },
  //     { to: href("/web-components"), label: "Web components", type: "link" },
  //   ],
  // },
] as const;

const createPopoverId = (label: string) => `popover_${label}`;

export default function Layout() {
  const pathname = useLocation().pathname;

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {routes.map((route) =>
            route.type === "link" ? (
              <li key={route.label}>
                <NavLink
                  className={styles.item}
                  to={route.to}
                  // disable view transitions on same-page navigation
                  viewTransition={pathname !== route.to}
                >
                  {route.label}
                </NavLink>
              </li>
            ) : (
              <li key={route.label} className="popover">
                <style>
                  {/* Technically I don’t think we don‘t need this popover
                    anchorName because they are next to each other in the dom,
                    but I will leave it here until I have a full understanding
                    of best practice */}
                  {`
                    .popover {
                      --anchorName: ${route.label};
                    }
                  `}
                </style>
                <button
                  type="button"
                  className={styles.item}
                  popoverTarget={createPopoverId(route.label)}
                >
                  {route.label}
                </button>
                <ul
                  className={styles.sublist}
                  id={createPopoverId(route.label)}
                  popover="auto"
                  role="menu"
                >
                  {route.links.map((subroute) => (
                    <li key={subroute.label}>
                      <NavLink
                        className={styles.item}
                        to={subroute.to}
                        // disable view transitions on same-page navigation
                        viewTransition={pathname !== subroute.to}
                      >
                        {subroute.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
      </nav>

      <Cube>
        <Outlet />
      </Cube>
    </>
  );
}
