import React from "react";
import { render } from "react-snapshot";
import "css/CVApp.css";

import CVApp, { cvJSON } from "./components/CVApp/CVApp";
import registerServiceWorker from "./registerServiceWorker";

import cv from "./json/cv.json";

console.log(cv);

const cvv: cvJSON = cv;

render(<CVApp cvJSON={cvv} />, document.getElementById("root"));

registerServiceWorker();
