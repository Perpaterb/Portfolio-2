import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DivHandler from './DivHandler';
import reportWebVitals from './reportWebVitals';
import nameImg from './img/background-Name.png';

ReactDOM.render(
  <React.StrictMode>
    <img src={nameImg} style={{height:45 , position: 'fixed', bottom: 10, left: 10}} alt={"name"} />
    <DivHandler/>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
