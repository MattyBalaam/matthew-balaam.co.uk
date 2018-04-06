import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CVApp from './js/CVApp';
import registerServiceWorker from './registerServiceWorker';


console.log('make sure the PDF is added');

ReactDOM.render(<CVApp />, document.getElementById('root'));
registerServiceWorker();
