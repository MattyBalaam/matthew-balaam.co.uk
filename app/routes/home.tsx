import { href, Link } from "react-router";
import type { Route } from "./+types/home";
import { Grid } from "~/components/grid/grid";

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <Grid>
        <Grid.Child variant="main">
          <h1>Matthew Balaam</h1>
        </Grid.Child>
        <p>Hi, this is my site. Explore away</p>
        <p>
          This site is currently under construction, os there may be many bugs
        </p>
        <Link to={href("/cv")} viewTransition>
          View my CV
        </Link>
        <Link to={href("/music")} viewTransition>
          Listen to my music
        </Link>
      </Grid>
    </div>
  );
}
