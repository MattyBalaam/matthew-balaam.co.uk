import { Paragraph, Paragraphs } from "~/components/typography/typography";
import type { Resume } from "~/schema";

import { CvSection } from "./cv-section";
import * as styles from "./education.css";

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
            <Paragraph>{area}</Paragraph>
          </CvSection.Child>
          <CvSection.Child variant="sub">
            <Paragraphs>{summary}</Paragraphs>
          </CvSection.Child>
        </CvSection.Child>
      </CvSection>
    ),
  );
}
