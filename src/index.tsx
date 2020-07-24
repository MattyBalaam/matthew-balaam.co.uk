import React from "react";
import { render } from "react-dom";
import "./css/animations.css";
import "./css/resets.css";
import "./css/variables.css";
import "./css/typography.css";
import "./css/CVApp.css";

import CVApp, { cvJSON } from "./components/CVApp/CVApp";

import cv from "./json/cv.json";

const cvv: cvJSON = cv;

render(<CVApp cvJSON={cvv} />, document.getElementById("root"));
