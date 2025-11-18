import { href, Link } from "react-router";
import type { Route } from "./+types/music";

export function loader() {
  return {
    test: [1, 2, 3],
  };
}

export default function Music({ loaderData: { test } }: Route.ComponentProps) {
  return (
    <div
      style={{
        padding: "5em",
        gap: "1rem",
      }}
    >
      <h1>Music</h1>
      <p>This is the music page</p>
      <ul>
        {test.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Link to={href("/")} viewTransition>
        Back home
      </Link>
    </div>
  );
}
