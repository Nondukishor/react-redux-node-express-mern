import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './route/Routes'
import './assets/scss/materialize.scss'
ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker.unregister();
