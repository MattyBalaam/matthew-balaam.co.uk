import React from "react";
import parseDates from "../../utility/parseDates";
import Grid, { gridStyles } from "../Grid/Grid";
import SectionHeader from "../SectionHeader/SectionHeader";
import Role from "./Role";
import classes from "../../utility/classes";

interface Work {
  endDate: string;
  highlights: string[];
  position: string;
  startDate: string;
  name: string;
  url?: string;
}

type Props = {
  work: Work[];
};

const Experience = ({ work }: Props) => (
  <Grid className="experience" Component="article">
    <SectionHeader className={gridStyles.header}>Experience</SectionHeader>
    <section className={classes(["experience__roles", gridStyles.main])}>
      {work.map(({ startDate, endDate, ...props }) => (
        <Role {...props} {...parseDates({ startDate, endDate })} />
      ))}
    </section>
  </Grid>
);

export default Experience;
