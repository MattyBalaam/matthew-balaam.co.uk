import React, { Component } from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Technologies from './Technologies';
import balanceText from 'balance-text';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      cubeAnimClass: 'cube--loading',
    };
    this.cubeRef = React.createRef();
  }

  static getDerivedStateFromProps = nextProps => ({content: nextProps.cvJSON});

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
      <>
      <aside className="download-pdf">
        <a href={`${process.env.PUBLIC_URL}/pdf/Matthew-Balaam_Developer.pdf`} 
          target="_blank" 
          className="download-pdf__link">
          <span className="download-pdf__text">Download CV as PDF</span><> </>
          <span className="download-pdf__icon"></span>
        </a>
      </aside>
      <main className="cv cube__perspective">
        <div ref={this.cubeRef} className={`cv__cube cube ${this.state.cubeAnimClass}`}>
          <div className="cube__face-1">
          </div>
          <div className="cube__face-2">
            <article className="cv__grid"> 
              <Contact {...this.state.content.basics} />
              <Technologies tech={this.state.content.skills[0].keywords} /> 
              <Experience content={this.state.content.work} />
              <Education education={this.state.content.education} />
            </article>
          </div>
        </div>
      </main>
      </>
    );
  }
}

export default App;
