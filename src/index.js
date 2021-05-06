import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import App from './App';

const divRoot = document.querySelector('#root');

ReactDOM.render(
    // <CounterApp value={ 15 }/>
    <App greeting='Hi, I am Bryan'/>
  ,divRoot
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
