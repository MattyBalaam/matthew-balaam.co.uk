import React, { Component } from 'react';
import MarkdownParagraphs from './utility/MarkdownParagraphs';
import {NiceDate} from './utility/DateFormat';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {work: this.parseDates(this.props.work)};
  }
  
  parseDates = work => work.map(role => {
    role.start = new Date(role.startDate);
    role.end = new Date(role.endDate);
    return role;
  });
  
  role = role => (
    
    <section key={role.startDate} className="role grid__sub divider">
      <header className="role__header grid__sub-info">
        <h3 className="role__company">{role.company}</h3>
        <p className="role__dates">
          <NiceDate className="role__start" date={role.start}/>
          <> – </>
          <NiceDate className="role__end" date={role.end}/>
        </p>
        <p className="role__title">{role.position}</p>
        <p className="role__name">{role.name}</p>
        {role.url ? 
          <a className="role__website" href={role.url} target="_blank">{role.url}</a>
          : null
        }
      </header>
      <section className="role__descripton grid__sub-description">
        <MarkdownParagraphs source={role.highlights} />
      </section>
    </section>
  )
  

  render() {
    return (
      <article className="experience grid">
        <h2 className="section-header experience__header grid__header">Experience</h2>
        <section className="experience__roles grid__main">
          {this.props.work.map((role, i) => this.role(role, i))}
        </section>
      </article>
    )
  }
}

export default Experience;