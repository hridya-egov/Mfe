import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './AppWrapper'; // Adjust path as per your project structure

const mount = (el) => {
  ReactDOM.render(<App2 />, el);
};

// Check if running in development environment
if (process.env.NODE_ENV === 'development') {
  const rootNode = document.querySelector('#testapp-root');
  if (rootNode) {
    mount(rootNode); // Mount the app in the specified root element
  } else {
    console.error('Root element with id "testapp-root" not found.');
  }
}

export { mount };
