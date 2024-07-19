import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom

import App1 from './AppWrapper'; // Adjust path as per your project structure

const root = createRoot(document.getElementById('root'));

const AppWrapper = () => {
  return (
    <React.StrictMode>
      <App1 />
    </React.StrictMode>
  );
};

root.render(<AppWrapper />);

export default AppWrapper;
