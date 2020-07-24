import React from "react";
import Paragraphs from "../Paragraphs/Paragraphs";
import NiceDate from "../NiceDate/NiceDate";
import Grid, { gridStyles } from "../Grid/Grid";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Institution.module.css";
import classes from "../../utility/classes";

export interface InstitutionProps {
  area: string;
  endDate: string;
  institution: string;
  startDate: string;
  studyType: string;
  summary: string[];
}

export interface Props extends InstitutionProps {
  end: Date | false;
  start: Date;
}

const Institution = ({
  area,
  end,
  institution,
  start,
  studyType,
  summary,
}: Props) => (
  <Grid Component="article" tightBottom>
    <SectionHeader className={gridStyles.header}>Education</SectionHeader>
    <section className={classes([gridStyles.main, gridStyles.sub, "divider"])}>
      <div className={gridStyles.subInfo}>
        <p className={styles.institution}>{institution}</p>
        <p className={styles.area}>{area}</p>
        <p>{studyType}</p>
        <p>
          <NiceDate date={start} />
          {end && (
            <>
              {" "}
              –
              <NiceDate date={end} />
            </>
          )}
        </p>
      </div>
      <Paragraphs className={gridStyles.subDescription} source={summary} />
    </section>
  </Grid>
);

export default Institution;
