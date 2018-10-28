import React from "react";
import parseDates from "js/utility/parseDates";
import Grid from "js/Grid/Grid";
import SectionHeader from "js/SectionHeader/SectionHeader";
import Role from "./Role";

type Work = {
  endDate: string;
  highlights: string[];
  position: string;
  startDate: string;
  name: string;
  url?: string;
};

type ExperienceProps = {
  work: Work[];
};
export default class Experience extends React.Component<ExperienceProps, {}> {
  render() {
    const work = this.props.work.map(parseDates);
    return (
      <Grid className="experience" Component="article">
        <SectionHeader className="grid__header">Experience</SectionHeader>
        <section className="experience__roles grid__main">
          {work.map(({ key, ...props }) => (
            <Role {...props} key={key} />
          ))}
        </section>
      </Grid>
    );
  }
}
