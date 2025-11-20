import { NavLink, Outlet, href, useLocation } from "react-router";
import { Cube } from "~/components/cube/cube";
import * as styles from "./layout.css";

const links = [
  { to: href("/"), label: "Home" },
  { to: href("/cv"), label: "C.V." },
  { to: href("/music"), label: "Music" },
] as const;

export default function Layout() {
  const pathname = useLocation().pathname;

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                className={styles.item}
                to={to}
                viewTransition={pathname !== to}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Cube>
        <Outlet />
      </Cube>
    </>
  );
}
