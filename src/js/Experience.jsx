import React, { Component } from 'react';
import MarkdownParagraphs from './utility/MarkdownParagraphs';
import parseDates from './utility/ParseDates';
import {NiceDate} from './utility/DateFormat';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps = nextProps => ({work: parseDates(nextProps.content)});

  render() {
    return (
      <article className="experience grid">
        <h2 className="section-header experience__header grid__header">Experience</h2>
        <section className="experience__roles grid__main">
          {this.state.work.map((role, i) => Role(role, i))}
        </section>
      </article>
    )
  }

}

const Role = role => (
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

}
}

export default Experience;