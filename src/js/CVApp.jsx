import React from "react";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Technologies from "./Technologies";
import balanceText from "balance-text";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      cubeAnimClass: "cube--loading"
    };
  }

  componentDidMount() {
    balanceText();
    this.cubeRef.current.addEventListener("animationend", () => {
      this.setState({
        cubeAnimClass: "cube--loaded"
      });
    });
  }

  cubeRef = React.createRef();

  render() {
    const { basics, education, skills, work } = this.props.cvJSON;
    return (
      <React.StrictMode>
        <aside className="download-pdf">
          <a
            href={`${process.env.PUBLIC_URL}/pdf/Matthew-Balaam_Developer.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="download-pdf__link"
          >
            <span className="download-pdf__text">Download CV as PDF</span>
            <span className="download-pdf__icon" />
          </a>
        </aside>
        <main className="cv cube__perspective">
          <div
            ref={this.cubeRef}
            className={`cv__cube cube ${this.state.cubeAnimClass}`}
          >
            <div className="cube__face-1" />
            <div className="cube__face-2">
              <article className="cv__grid">
                <Contact {...basics} />
                <Technologies tech={skills[0].keywords} />
                <Experience work={work} />
                <Education education={education} />
              </article>
            </div>
          </div>
        </main>
      </React.StrictMode>
    );
  }
}
