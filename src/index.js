import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/scss/style.scss";
import App from './App';
import { DataLayer } from "./ContextAPI/DataLayer";
import reducer , { initialState } from './ContextAPI/reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={ initialState } reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
