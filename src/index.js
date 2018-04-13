import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import CVApp from './js/CVApp';
import registerServiceWorker from './registerServiceWorker';

import './css/CVApp.css';

render(
  <CVApp />, document.getElementById('root')
);
registerServiceWorker();
