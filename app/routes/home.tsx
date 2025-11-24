import { Grid } from "~/components/grid/grid";
import { Paragraph } from "~/components/typography/typography";
import { UnderConstruction } from "~/components/under-construction/under-construction";
import { href, Link, type MetaDescriptor } from "react-router";

import TestMDX from "./test.mdx";

export function meta() {
  return [{ title: "Matthew Balaam" }] satisfies Array<MetaDescriptor>;
}

export default function Home() {
  return (
    <Grid>
      <Grid.Child variant="main">
        <h1>Matthew Balaam</h1>
      </Grid.Child>
      <Grid.Child variant="main">
        <Paragraph>
          I’m a frontend developer by day and a DJ by night and this is my site.{" "}
          <Link to={href("/cv")} viewTransition>
            View my CV
          </Link>
        </Paragraph>
        <TestMDX />
      </Grid.Child>

      <Grid.Child variant="main">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Paragraph>
            This site is currently under construction, so please excuse the
            shabby appearance :D
          </Paragraph>
          <UnderConstruction />

          <Link to={href("/music")} viewTransition>
            Listen to my music
          </Link>
        </div>
      </Grid.Child>
    </Grid>
  );
}
