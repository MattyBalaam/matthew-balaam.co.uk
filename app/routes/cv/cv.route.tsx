import { Outlet, type MetaDescriptor } from "react-router";

import { TextList } from "~/components/typography/typography";
import jsonData from "~/json/cv.json";
import { zResume } from "~/schema";

import type { Route } from "./+types/cv.route";
import { Contact } from "./contact";
import { CvSection } from "./cv-section";
import { Download } from "./download";
import { Education } from "./education";
import { Experience } from "./experience";

import * as styles from "./cv.css";

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
      <article className={styles.cvGrid}>
        <Download />

        <Contact {...basics} />

        <CvSection>
          <CvSection.Heading>Technologies</CvSection.Heading>

          <CvSection.Child variant="main">
            <TextList className={styles.technologyList}>
              {[...skills[0].keywords.slice(0, 11), <>More…</>]}
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
