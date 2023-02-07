import React from 'react';
import ReactDOM from 'react-dom/client';
import ComplexClassComponent from './ComplexClassComponent';
import ComplexFunctionComponent from './ComplexFunctionComponent';
import SimpleClassComponent from './SimpleClassComponent';
import { SimpleFunctionComponent } from './SimpleFunctionComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleClassComponent name="The first component" />
    <hr />
    <ComplexClassComponent name="Kalle Komponent" age="5" onClick={ (str) => { alert("index.js: " + str); } } />
    <hr />
    <SimpleFunctionComponent name="The first function component"/>
    <hr />
    <ComplexFunctionComponent name="mr Very Complex" onMessage={ (str) => { alert("index.js (complexfunction): " + str); } } />
  </React.StrictMode>
);

