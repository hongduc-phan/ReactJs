import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import './index.css';
import SmarpApp from './pages/smarp-app';
import * as serviceWorker from './serviceWorker';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <SmarpApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
