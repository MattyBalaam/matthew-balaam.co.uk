import React from "react";
import Cube from "../Cube/Cube";
import Contact from "../Contact/Contact";
import Education, { EducationProps } from "../Education/Education";
import Experience from "../Experience/Experience";
import Technologies from "../Technologies/Technologies";
import Download from "../Download/Download";
import styles from "./CVApp.module.css";

export type Profile = {
  network: string;
  username: string;
  url: string;
};

export type Location = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
};

export type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
};

export type Skills = {
  name: string;
  keywords: string[];
};

export type Work = {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

export type cvJSON = EducationProps & {
  basics: Basics;
  skills: Skills[];
  work: Work[];
};

export type AppProps = {
  cvJSON: cvJSON;
};

export default class App extends React.Component<AppProps> {
  render() {
    console.log(this.props.cvJSON);
    const { basics, education, skills, work } = this.props.cvJSON;
    return (
      <React.StrictMode>
        <Download />
        <Cube
          className={styles.cv}
          renderFace={
            <article className={styles.cvGrid}>
              <Contact {...basics} />
              <Technologies tech={skills[0].keywords} />
              <Experience work={work} />
              <Education education={education} />
            </article>
          }
        />
      </React.StrictMode>
    );
  }
}
