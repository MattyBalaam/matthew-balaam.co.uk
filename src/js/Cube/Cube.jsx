import React from "react";

import styles from "./Cube.module.css";

export default class Cube extends React.Component {
  state = {
    cubeAnimClass: styles.loading
  };
  componentDidMount() {
    this.cubeRef.current.addEventListener("animationend", () => {
      this.setState({
        cubeAnimClass: styles.loaded
      });
    });
  }

  cubeRef = React.createRef();

  render() {
    const { className, renderFace } = this.props;
    return (
      <main className={`${className} ${styles.perspective}`}>
        <div
          ref={this.cubeRef}
          className={`${styles.cube} ${this.state.cubeAnimClass}`}
        >
          <div className={styles.face1} />
          <div className={styles.face2}>{renderFace}</div>
        </div>
      </main>
    );
  }
}
