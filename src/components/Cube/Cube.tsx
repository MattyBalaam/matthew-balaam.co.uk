import React from "react";

import styles from "./Cube.module.css";

export interface CubeProps {
  className: string;
  renderFace: React.ReactNode;
}

export interface CubeState {
  cubeAnimClass: string;
}

export default class Cube extends React.Component<CubeProps, CubeState> {
  state = {
    cubeAnimClass: styles.loading
  };
  componentDidMount() {
    if (this.cubeRef.current !== null) {
      this.cubeRef.current.addEventListener("animationend", () => {
        this.setState({
          cubeAnimClass: styles.loaded
        });
      });
    }
  }

  cubeRef = React.createRef<HTMLDivElement>();

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
