import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// BrowserRouter, HashRouter, MemoryRouter

ReactDOM.render(
  <React.StrictMode>
      {/** 라우터 사용을 위해 <App /> 컴포넌트를 <BrowserRouter></BrowserRouter>로 감싼다 */}
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
