import React from "react";
import PropTypes from "prop-types";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
};

const dateFormat = new Intl.DateTimeFormat("en-GB", dateOptions);
const getLongDate = date => dateFormat.format(date);
const getYear = date => date.getFullYear();

class NiceDate extends React.PureComponent {
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

export { NiceDate, getLongDate, getYear };
