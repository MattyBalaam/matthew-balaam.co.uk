import React from "react";
import PropTypes from "prop-types";
import parseDates from "js/utility/parseDates";
import Grid from "js/Grid/Grid";
import SectionHeader from "js/SectionHeader/SectionHeader";
import Role from "./Role";

export default class Experience extends React.Component {
  static propTypes = {
    work: PropTypes.arrayOf(
      PropTypes.shape({
        endDate: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
        position: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string
      })
    )
  };

  render() {
    const work = parseDates(this.props.work);
    return (
      <Grid className="experience" Component={React.article}>
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
