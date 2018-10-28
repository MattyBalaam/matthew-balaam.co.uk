import React from "react";
import { getYear, getLongDate } from "js/utility/DateFormat";
type NiceDateProps = {
  date: any;
};
export default class NiceDate extends React.PureComponent<NiceDateProps, {}> {
  render() {
    const { date, ...props } = this.props;
    return (
      <span {...props} title={getLongDate(date)}>
        {getYear(date)}
      </span>
    );
  }
}
