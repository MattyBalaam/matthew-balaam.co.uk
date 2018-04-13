import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import CVApp from './js/CVApp';
import registerServiceWorker from './registerServiceWorker';

import './css/CVApp.css';
import cvJSON from './json/cv.json';

render(
  <CVApp cvJSON={cvJSON} />, document.getElementById('root')
);
registerServiceWorker();
