import React from "react";
import parseDates from "../../utility/parseDates";
import Grid from "../Grid/Grid";
import SectionHeader from "../SectionHeader/SectionHeader";
import Role from "./Role";

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
    <SectionHeader className="grid__header">Experience</SectionHeader>
    <section className="experience__roles grid__main">
      {work.map(({ startDate, endDate, ...props }) => (
        <Role {...props} {...parseDates({ startDate, endDate })} />
      ))}
    </section>
  </Grid>
);

export default Experience;
