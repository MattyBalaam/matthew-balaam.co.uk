import React from "react";
import PropTypes from "prop-types";
import parseDates from "js/utility/ParseDates";
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
      <article className="experience grid">
        <h2 className="section-header experience__header grid__header">
          Experience
        </h2>
        <section className="experience__roles grid__main">
          {work.map(role => (
            <Role {...role} key={role.startDate} />
          ))}
        </section>
      </article>
    );
  }
}
