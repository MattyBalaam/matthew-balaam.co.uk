import { Link, type MetaDescriptor, href } from "react-router";
import { Grid } from "~/components/grid/grid";
import { Paragraph } from "~/components/typography/typography";

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
          <img
            src="MoMotorCitySpeedway1656construct.gif"
            alt="This page is under construction"
          />

          <Link to={href("/music")} viewTransition>
            Listen to my music
          </Link>
        </div>
      </Grid.Child>
    </Grid>
  );
}
