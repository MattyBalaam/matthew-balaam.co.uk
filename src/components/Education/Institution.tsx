import React from "react";
import BalanceText from "react-balance-text";
import MD from "../Markdown/MD";
import NiceDate from "../NiceDate/NiceDate";
import Grid from "../Grid/Grid";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Institution.module.css";

export type InstitutionProps = {
  area: string;
  endDate: string;
  institution: string;
  startDate: string;
  studyType: string;
  summary: string[];
};

export type InstitutionRenderProps = InstitutionProps & {
  end: Date;
  start: Date;
};

export default class Institution extends React.PureComponent<
  InstitutionRenderProps
  > {
  render() {
    const { area, end, institution, start, studyType, summary } = this.props;
    return (
      <Grid Component="article" tightBottom>
        <SectionHeader className="grid__header">Education</SectionHeader>
        <section className="grid__main grid__sub divider">
          <div className="grid__sub-info">
            <BalanceText className={styles.institution}>
              {institution}
            </BalanceText>
            <BalanceText className={styles.area}>{area}</BalanceText>
            <BalanceText>{studyType}</BalanceText>
            <p>
              <NiceDate date={start} />
              <> – </>
              <NiceDate date={end} />
            </p>
          </div>
          <MD className="grid__sub-description" source={summary} />
        </section>
      </Grid>
    );
  }
}
