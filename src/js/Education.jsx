import React, { Component } from 'react';
import MarkdownParagraphs from './utility/MarkdownParagraphs';
import parseDates from './utility/ParseDates';
import {NiceDate} from './utility/DateFormat';

const Institution = institution => (
  <article className="education grid grid--tight-bottom" key={institution.startDate}>
    <h2 className="section-header education__header grid__header">Education</h2>
    <section className="education__content grid__main grid__sub divider">
      <div className="grid__sub-info">
        <p className="education__institution balance-text">{institution.institution}</p>
        <p className="education__area balance-text">{institution.area}</p>
        <p className="education__study-type balance-text">{institution.studyType}</p>
        <p><NiceDate className="education__start" date={institution.start}/>
        <> – </><NiceDate className="education__end" date={institution.end}/></p>
      </div>
      <MarkdownParagraphs className="grid__sub-description" source={institution.summary}/>
    </section>  
  </article>
);

const Institutions = institutions => (
  <>
    {institutions.map(institution => Institution(institution))}
  </>
)

class Education extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps = nextProps => ({content: parseDates(nextProps.education)});

  render() { 
    return Institutions(this.state.content);
  }
}


export default Education;