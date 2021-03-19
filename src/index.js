import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);