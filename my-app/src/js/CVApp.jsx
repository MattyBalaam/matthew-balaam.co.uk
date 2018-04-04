import React, { Component } from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Technologies from './Technologies';
import balanceText from 'balance-text';

import cvJSON from '../json/cv.json';

import '../css/CVApp.css';


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

  componentDidMount() {
    balanceText();
  }

  render() {
    return (
      <main className="cv">
        <article className="cv__grid"> 
          <Contact {...this.state.content.basics} />
          <Experience work={this.state.content.work} />
          <Education education={this.state.content.education} />
          <Technologies technologies={this.state.content.skills[0].keywords} /> 
        </article>
      </main>
    );
  }
}

export default App;
