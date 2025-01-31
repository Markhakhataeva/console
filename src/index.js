import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Consolas', sans-serif;
    }`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <GlobalStyle />
      <App />
  </>
);
