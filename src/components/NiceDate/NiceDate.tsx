import React from "react";
import { getYear, getLongDate } from "../../utility/DateFormat";

interface Props {
  date: Date;
}

const NiceDate = ({ date, ...props }: Props) => (
  <span {...props} title={getLongDate(date)}>
    {getYear(date)}
  </span>
);

export default NiceDate;
