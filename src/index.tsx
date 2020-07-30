import React from "react";
import { render, hydrate } from "react-dom";
//Blow away any hanging CRA service workers. To be removed… later.
import "./utility/unregisterworker";

// Import global styles.
import "./css/resets.css";
import "./css/variables.css";
import "./css/typography.css";
import "./css/CVApp.css";

import CVApp, { cvJSON } from "./components/CVApp/CVApp";

import cv from "./json/cv.json";

const cvv: cvJSON = cv;

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(<CVApp cvJSON={cvv} />, rootElement);
} else {
  render(<CVApp cvJSON={cvv} />, rootElement);
}
