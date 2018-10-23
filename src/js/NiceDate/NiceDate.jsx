import React from "react";
import PropTypes from "prop-types";

import { getYear, getLongDate } from "js/utility/DateFormat";

export default class NiceDate extends React.PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
  };
  render() {
    const { date, ...props } = this.props;

    return (
      <span {...props} title={getLongDate(date)}>
        {getYear(date)}
      </span>
    );
  }
}
