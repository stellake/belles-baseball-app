import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/Lora/Lora-Regular.ttf';
import './fonts/Lora/Lora-Bold.ttf';
import './fonts/Lora/Lora-BoldItalic.ttf';
import './fonts/Lora/Lora-Italic.ttf';
import './fonts/Merriweather/Merriweather-Regular.ttf';
import './fonts/Merriweather/Merriweather-Black.ttf';
import './fonts/Merriweather/Merriweather-BlackItalic.ttf';
import './fonts/Merriweather/Merriweather-Bold.ttf';
import './fonts/Merriweather/Merriweather-BoldItalic.ttf';
import './fonts/Merriweather/Merriweather-Light.ttf';
import './fonts/Merriweather/Merriweather-LightItalic.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
