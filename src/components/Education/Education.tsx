import React from "react";
import parseDates from "../../utility/parseDates";
import Institution, { InstitutionProps } from "./Institution";

export interface Props {
  education: InstitutionProps[];
}

const Education = ({ education }: Props) => (
  <>
    {education.map(({ startDate, endDate, ...instProps }) => (
      <Institution
        startDate={startDate}
        endDate={endDate}
        {...parseDates({ startDate, endDate })}
        {...instProps}
      />
    ))}
  </>
);

export default Education;
