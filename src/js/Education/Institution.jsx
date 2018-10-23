import React from "react";
import PropTypes from "prop-types";
import MD from "js/Markdown/MD";
import NiceDate from "js/NiceDate/NiceDate";
import Grid from "js/Grid/Grid";
import BalancedText from "js/BalancedText/BalancedText";
import SectionHeader from "js/SectionHeader/SectionHeader";

import styles from "./Institution.module.css";

export default class Institution extends React.PureComponent {
  static propTypes = {
    area: PropTypes.string.isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    institution: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  render() {
    const { area, end, institution, start, studyType, summary } = this.props;

    return (
      <Grid Component={React.article} tightBottom>
        <SectionHeader className="grid__header">Education</SectionHeader>
        <section className="grid__main grid__sub divider">
          <div className="grid__sub-info">
            <BalancedText className={styles.institution}>
              {institution}
            </BalancedText>
            <BalancedText className={styles.area}>{area}</BalancedText>
            <BalancedText>{studyType}</BalancedText>
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
