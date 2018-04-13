import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import CVApp from './js/CVApp';
import registerServiceWorker from './registerServiceWorker';

import './css/CVApp.css';

console.log('make sure the PDF is added');

render(
  <CVApp />, document.getElementById('root')
);
registerServiceWorker();
