import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './01_组件的定义方式/02_render返回值';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);