import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  type LayoutRouteProps,
} from "react-router";

import { themeClass } from "~/css/theme.css";

import * as styles from "./root.css";

import "./css/print.css";
// TODO - migrate typography to Vanilla Extract
import "./css/typography.css";

export function Layout({ children }: LayoutRouteProps) {
  const location = useLocation();

  return (
    <html
      lang="en-GB"
      className={[themeClass, styles.html, location.pathname].join(" ")}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={styles.body}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
