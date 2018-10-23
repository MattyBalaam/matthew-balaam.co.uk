import React from "react";
import { render } from "react-snapshot";
import "css/CVApp.css";

import CVApp from "js/CVApp/CVApp";
import registerServiceWorker from "./registerServiceWorker";

import cvJSON from "./json/cv.json";

render(<CVApp cvJSON={cvJSON} />, document.getElementById("root"));
registerServiceWorker();
