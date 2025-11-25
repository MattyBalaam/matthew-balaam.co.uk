import { href, Link as RouterLink } from "react-router";

import { Link } from "~/components/link/link";
import { Paragraph, TextList } from "~/components/typography/typography";
import type { Resume } from "~/schema";

import { CvSection } from "./cv-section";

import * as styles from "./experience.css";

interface ExperienceProps {
  work: Resume["work"];
}

export function Experience({ work }: ExperienceProps) {
  return (
    <CvSection>
      <CvSection.Heading>Experience</CvSection.Heading>
      <CvSection.Child variant="main">
        {work.map(
          (
            {
              startDate,
              endDate,
              position,
              name,
              url,
              summary,
              highlights = [],
            },
            index,
          ) => (
            <CvSection.Child variant="main" key={name}>
              <CvSection.Child variant="info">
                <header>
                  <CvSection.Dates startDate={startDate} endDate={endDate} />

                  <p>{position}</p>
                  <p>{url ? <Link href={name}>{name}</Link> : name}</p>
                </header>
              </CvSection.Child>
              <CvSection.Child variant="sub">
                {/* we only want to show the full highlights for the current role */}
                {index === 0 ? (
                  <>
                    <Paragraph>{summary}</Paragraph>
                    <TextList variant="serif">{highlights}</TextList>
                  </>
                ) : (
                  <Paragraph>
                    {summary}{" "}
                    <RouterLink
                      className={styles.seeMore}
                      to={href("/cv/:experience", { experience: name })}
                      preventScrollReset
                    >
                      See full details
                    </RouterLink>
                  </Paragraph>
                )}
              </CvSection.Child>
            </CvSection.Child>
          ),
        )}
      </CvSection.Child>
    </CvSection>
  );
}
