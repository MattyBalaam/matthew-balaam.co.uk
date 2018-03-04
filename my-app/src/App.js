import React, { Component } from 'react';
import './App.css';
import cvJSON from './cv.json';

const dateOptions = {  
  weekday: "long", year: "numeric", month: "short",  
  day: "numeric"
};  

class Paragraphs extends Component {

  render (){
    return (
      <>
        {this.props.content.map((line, i) => <p key={i}>{line}</p>)}
      </>
    )
  }
}




class Contact extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const content = this.props.content;
    const loc = content.location;
    return (
      <header className="contact grid">
        <section className="contact__primary">
          <h1 className="contact__name">{content.name}</h1>
          <p><a className="contact__email" href={`mailto:${content.email}`}>{content.email}</a></p>
          <Profiles content={content.profiles}/>
          <p className="contact__phone">{content.phone}</p>
        </section>
        <p className="contact__address">
          <span className={"contact__address-line"}>{loc.address}</span>
          <span className={"contact__address-line"}>{loc.city}</span>
          <span className={"contact__address-line"}>{loc.postalCode}</span>
        </p>
        <section className="contact__summary">
          <Paragraphs content={content.summary} />
        </section>
      </header>
    )
  }
}


class Profiles extends Component {
  render() {
    return this.props.content.map((profile, i) => 
        <p key={i} className="contact__profile">
          <a title={profile.network}
        href={profile.url} target="_blank"
      >{profile.username}</a>
      </p>
    )
  }
}

class Experience extends Component {

  // constructor(props) {
  //   super(props);
  //   // this.state = {date: new Date()};
  // }

  dateFormat = new Intl.DateTimeFormat('en-GB', dateOptions);
  
  role(role, i) {

    const startDate = new Date(role.startDate)
    const endDate = new Date(role.endDate);
    return (
      <section key={i} className="role grid__sub">
        <header className="role__header">
          <h3 className="role__company">{role.company}</h3>
          <p className="role__dates">
            <span className="role__start" title={this.dateFormat.format(startDate)} >
            {startDate.getFullYear()}
          </span> – <span className="role__end" title={this.dateFormat.format(endDate)}>
            {endDate.getFullYear()}
          </span>
          </p>
          <p className="role__title">{role.position}</p>
          <p className="role__name">{role.name}</p>
          <a className="role__website" href={role.url} target="_blank">{role.url}</a>
        </header>
        <section className="role__descripton">
          <Paragraphs content={role.highlights} />
        </section>
      </section>
    )
  }

  render() {
    const content = this.props.content;
    return (
      <article className="experience grid">
        <h2 className="experience__header">Experience</h2>
        <section className="experience__roles">
          {content.map((role, i) => this.role(role, i))}
        </section>
      </article>
    )
  }
}

class Technologies extends Component {
  render() {
    const content = this.props.content;
    return (
      <article className="technology grid">
        <h2 className="technology__header">Technologies</h2>
        <ul className="technology__list">
          {content.map((item, i) => <li key={i} className="technology__item">{item}</li>)}
        </ul>
      </article>
    )
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentWillMount() {
    this.setState({
      content: cvJSON,
    })
  }

  render() {
    const content = this.state.content;
    return (
      <div className="cv">
        <div className="cv__grid">
          <Contact content={content.basics} />
          <main>
            <Experience content={content.work} />
            {/* Education */}
            <Technologies content={content.skills[0].keywords} /> 
          </main>
        </div>
      </div>
    );
  }
}

export default App;
