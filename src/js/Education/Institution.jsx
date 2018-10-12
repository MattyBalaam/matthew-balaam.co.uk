import React from "react";
import PropTypes from "prop-types";
import MarkdownParagraphs from "../utility/MarkdownParagraphs";
import { NiceDate } from "../utility/DateFormat";

export default class Institution extends React.Component {
  static propTypes = {
    area: PropTypes.string.isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    institution: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    startDate: PropTypes.string.isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  render() {
    const {
      area,
      end,
      institution,
      start,
      startDate,
      studyType,
      summary
    } = this.props;
    console.log(this.props);
    return (
      <article className="education grid grid--tight-bottom" key={startDate}>
        <h2 className="section-header education__header grid__header">
          Education
        </h2>
        <section className="education__content grid__main grid__sub divider">
          <div className="grid__sub-info">
            <p className="education__institution balance-text">{institution}</p>
            <p className="education__area balance-text">{area}</p>
            <p className="education__study-type balance-text">{studyType}</p>
            <p>
              <NiceDate className="education__start" date={start} />
              <> – </>
              <NiceDate className="education__end" date={end} />
            </p>
          </div>
          <MarkdownParagraphs
            className="grid__sub-description"
            source={summary}
          />
        </section>
      </article>
    );
  }
}
