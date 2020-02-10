import React from "react";
import parseDates from "../../utility/parseDates";
import Institution, { InstitutionProps } from "./Institution";

export interface Props {
  education: InstitutionProps[];
}

const Education = ({ education }: Props) => (
  <>
    {education.map(inst => {
      const { key, ...props } = parseDates(inst);
      return <Institution {...props} key={key} />;
    })}
  </>
);

export default Education;
