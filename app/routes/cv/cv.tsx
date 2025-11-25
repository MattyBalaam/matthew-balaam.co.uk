import { TextList } from "~/components/typography/typography";
import jsonData from "~/json/cv.json";
import { zResume } from "~/schema";
import { Outlet, type MetaDescriptor } from "react-router";

import type { Route } from "./+types/cv";
import { Contact } from "./contact";
import { CvSection } from "./cv-section";
import * as styles from "./cv.css";
import { Download } from "./download";
import { Education } from "./education";
import { Experience } from "./experience";

export function meta() {
  return [{ title: "Matthew Balaam - CV" }] satisfies Array<MetaDescriptor>;
}

export async function loader() {
  return zResume
    .required({
      basics: true,
      skills: true,
      work: true,
      education: true,
    })
    .parse(jsonData);
}

export default function CV({
  loaderData: { basics, skills, work, education },
}: Route.ComponentProps) {
  return (
    <>
      <Download />

      <article className={styles.cvGrid}>
        <Contact {...basics} />

        <CvSection>
          <CvSection.Heading>Technologies</CvSection.Heading>

          <CvSection.Child variant="main">
            <TextList className={styles.technologyList}>
              {[...skills[0].keywords.slice(0, 11), <>And many more…</>]}
            </TextList>
          </CvSection.Child>
        </CvSection>

        <Experience work={work} />

        <Education education={education} />
      </article>

      <Outlet />
    </>
  );
}
