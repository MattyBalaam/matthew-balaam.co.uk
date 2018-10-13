import React from "react";
import PropTypes from "prop-types";
import parseDates from "js/utility/ParseDates";
import Institution from "./Institution";

export default class Education extends React.Component {
  static propTypes = {
    education: PropTypes.arrayOf(
      PropTypes.shape({
        ...PropTypes.Institution
      })
    ).isRequired
  };

  render() {
    return parseDates(this.props.education).map(props => (
      <Institution {...props} key={props.startDate} />
    ));
  }
}
