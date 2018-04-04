import React, { Component } from 'react';
import Paragraphs from './utility/Paragraphs';
import {NiceDate} from './utility/DateFormat';

class Education extends Component {

    constructor(props) {
      super(props);
      this.state = {education: this.parseDates(this.props.education)};
    }
    
    parseDates = education => {
      return education.map(institution => {
        institution.start = new Date(institution.startDate);
        institution.end = new Date(institution.endDate);
        return institution;
      });
    }
  
    render() {
      return (
        <>
        {this.props.education.map((institution) => {
          return (
            <article className="education grid" key={institution.startDate}>
              <h2 className="section-header education__header grid__header">Education</h2>
              <section className="education__content grid__main grid__sub">
                <div className="grid__sub-info">
                <p className="education__institution balance-text">{institution.institution}</p>
                <p className="education__area balance-text">{institution.area}</p>
                <p className="education__study-type balance-text">{institution.studyType}</p>
                <p><NiceDate className="education__start" date={institution.start}/>
                – <NiceDate className="education__end" date={institution.end}/></p>
                </div>
                <div className="grid__sub-description">
                  <Paragraphs content={institution.summary}/>
                </div>
              </section>  
            </article>
          )
        })
      }
      </>
     )
    }
  }

  export default Education;