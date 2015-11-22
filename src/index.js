import React from 'react';
import ReactDOM from 'react-dom';
import injectTEP from 'react-tap-event-plugin';
import App from './App';

injectTEP();

ReactDOM.render(<App />, document.getElementById('root'));
