import * as styles from "./education.css";

import type { Resume } from "~/schema";
import { Paragraphs } from "~/components/typography/typography";
import { CvSection } from "./cv-section";

export interface EducationProps {
  education: NonNullable<Resume["education"]>;
}

export function Education({ education }: EducationProps) {
  return education.map(
    ({ startDate, endDate, area, institution, studyType, summary }) => (
      <CvSection key={institution}>
        <CvSection.Heading>Education</CvSection.Heading>

        <CvSection.Child variant="main">
          <CvSection.Child variant="info">
            <CvSection.Dates startDate={startDate} endDate={endDate} />

            <p className={styles.institution}>{institution}</p>
            <p>{studyType}</p>
            <p className={styles.area}>{area}</p>
          </CvSection.Child>
          <CvSection.Child variant="sub">
            <Paragraphs>{summary}</Paragraphs>
          </CvSection.Child>
        </CvSection.Child>
      </CvSection>
    ),
  );
}
