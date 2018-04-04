import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CVApp from './js/CVApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CVApp />, document.getElementById('root'));
registerServiceWorker();
