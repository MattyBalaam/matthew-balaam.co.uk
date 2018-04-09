import React, { Component } from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Technologies from './Technologies';
import balanceText from 'balance-text';

import cvJSON from '../json/cv.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      cubeAnimClass: 'cube--loading',
    };
    this.cubeRef = React.createRef();
  }

  componentWillMount() {
    this.setState({
      content: cvJSON,
    })
  }

  componentDidMount() {
    balanceText();
    this.cubeRef.current.addEventListener('animationend', ()=> {
      this.setState({
        cubeAnimClass: 'cube--loaded'
      })
    })
  }

  render() {
    return (
      <main className="cv cube__perspective">
        <div ref={this.cubeRef} className={`cv__cube cube ${this.state.cubeAnimClass}`}>
          <div className="cube__face-1">
          </div>
          <div className="cube__face-2">
            <article className="cv__grid"> 
              <Contact {...this.state.content.basics} />
              <Technologies technologies={this.state.content.skills[0].keywords} /> 
              <Experience work={this.state.content.work} />
              <Education education={this.state.content.education} />
            </article>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
