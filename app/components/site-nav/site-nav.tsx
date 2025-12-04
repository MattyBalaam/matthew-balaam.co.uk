import { NavLink, useLocation } from "react-router";

import * as styles from "./site-nav.css";

export const routeTypes = {
  link: "link",
  group: "group",
} as const;

interface Link {
  type: typeof routeTypes.link;
  to: string;
  label: string;
}

interface Group {
  type: typeof routeTypes.group;
  label: string;
  links: Array<Link>;
}

export interface Routes {
  routes: Array<Link | Group>;
}

const createPopoverId = (label: string) => `popover_${label}`;

/**
 * Simple workaround for browsers that don't support anchor positioning
 * Relies on some fallback css styles
 */
const createAnchorPositionFallbackRef =
  (popoverTarget: string) => (anchor: HTMLButtonElement) => {
    if (anchor && window && !("anchorName" in document.documentElement.style)) {
      const setPosition = () => {
        const rect = anchor.getBoundingClientRect();
        const popover = document.getElementById(popoverTarget);

        if (!popover) {
          throw new Error(`Popover with id ${popoverTarget} not found`);
        }

        popover.style.setProperty("top", `${rect.height}px`);
        popover.style.setProperty("left", `${rect.left}px`);
      };

      const controller = new AbortController();

      const signal = controller.signal;

      window.addEventListener("resize", setPosition, {
        signal,
      });

      setPosition();

      return function removeListener() {
        controller.abort();
      };
    }
  };

function Items({ routes }: Routes) {
  const pathname = useLocation().pathname;

  return routes.map((route) =>
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
      <li key={route.label} className={styles.popover}>
        <style>
          {
            /* Technically I don’t think we don‘t need this popover
         anchorName because they are next to each other in the dom,
         but I will leave it here until I have a full understanding
         of best practice */
            `
         .${styles.popover} {
           --anchorName: ${route.label};
         }
       `
          }
        </style>
        <button
          type="button"
          className={styles.item}
          popoverTarget={createPopoverId(route.label)}
          ref={createAnchorPositionFallbackRef(createPopoverId(route.label))}
        >
          {route.label}
        </button>
        <ul
          className={styles.sublist}
          id={createPopoverId(route.label)}
          popover="auto"
          role="menu"
        >
          <Items routes={route.links} />
        </ul>
      </li>
    ),
  );
}

export function SiteNav({ routes }: Routes) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <Items routes={routes} />
      </ul>
    </nav>
  );
}
