import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure you import Router if using it in bootstrap.js
import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    el
  );
};

// For development environment
if (process.env.NODE_ENV === 'development') {
  const rootNode = document.querySelector('#core-root');
  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
