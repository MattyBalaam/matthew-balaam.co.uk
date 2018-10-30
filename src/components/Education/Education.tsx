import React from "react";
import parseDates from "../../utility/parseDates";
import Institution, { InstitutionProps } from "./Institution";

export type EducationProps = {
  education: InstitutionProps[];
};

export default class Education extends React.Component<EducationProps> {
  render() {
    return this.props.education.map(
      (inst: InstitutionProps): React.ReactNode => {
        const { key, ...props } = parseDates(inst);
        return <Institution {...props} key={key} />;
      }
    );
  }
}
