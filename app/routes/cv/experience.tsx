import { classes } from "~/utility/classes";
import type { Resume } from "~/schema";

import { Paragraph, TextList } from "~/components/typography/typography";
import { StringToLink } from "../../components/string-to-link";

import * as styles from "./experience.css";
import { CvSection } from "./cv-section";
import { href, Link } from "react-router";

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
                <header className={classes([styles.header])}>
                  <CvSection.Dates startDate={startDate} endDate={endDate} />

                  <p>{position}</p>
                  <p>
                    {url ? (
                      <StringToLink className={styles.website} label={name}>
                        {url}
                      </StringToLink>
                    ) : (
                      name
                    )}
                  </p>
                </header>
              </CvSection.Child>
              <CvSection.Child variant="sub">
                {/* we only want to show the full highlights for the current role */}
                {index === 0 ? (
                  <>
                    <Paragraph bottomMargin>{summary}</Paragraph>
                    <TextList variant="serif">{highlights}</TextList>
                  </>
                ) : (
                  <Paragraph>
                    {summary}{" "}
                    <Link
                      className={styles.seeMore}
                      to={href("/cv/:experience", { experience: name })}
                      preventScrollReset
                    >
                      See full details
                    </Link>
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
