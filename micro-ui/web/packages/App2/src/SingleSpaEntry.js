import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App2 from './AppWrapper';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App2, // Fix the component name here to App
  errorBoundary(err, info, props) {
    return <div>Something went wrong</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
