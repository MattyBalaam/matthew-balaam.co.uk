import React from "react";
import PropTypes from "prop-types";
import Cube from "js/Cube/Cube";

import Contact from "js/Contact/Contact";
import Education from "js/Education/Education";
import Experience from "js/Experience/Experience";
import Technologies from "js/Technologies/Technologies";
import Download from "js/Download/Download";

import styles from "./CVApp.module.css";

import balanceText from "balance-text";

export default class App extends React.Component {
  static proptypes = {
    cvJSON: PropTypes.shape({
      basics: PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        image: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        url: PropTypes.string,
        summary: PropTypes.string,
        location: PropTypes.shape({
          address: PropTypes.string,
          postalCode: PropTypes.string,
          city: PropTypes.string,
          countryCode: PropTypes.string
        }),
        profiles: PropTypes.arrayOf(
          PropTypes.shape({
            network: PropTypes.string,
            username: PropTypes.string,
            url: PropTypes.string
          })
        )
      }),
      education: PropTypes.arrayOf(
        PropTypes.shape({
          institution: PropTypes.string,
          area: PropTypes.string,
          studyType: PropTypes.string,
          startDate: PropTypes.string,
          endDate: PropTypes.string,
          summary: PropTypes.arrayOf(PropTypes.string)
        })
      ),
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          keywords: PropTypes.arrayOf(PropTypes.string)
        })
      ),
      work: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          position: PropTypes.string,
          url: PropTypes.string,
          startDate: PropTypes.string,
          endDate: PropTypes.string,
          highlights: PropTypes.arrayOf(PropTypes.string)
        })
      )
    })
  };
  componentDidMount() {
    balanceText();
  }

  render() {
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
