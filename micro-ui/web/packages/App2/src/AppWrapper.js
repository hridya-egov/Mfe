import React from 'react';
import Button from './components/Button';
import { createRoot } from 'react-dom';

const App2 = () => {
  return (
    <div>
      <h1>Welcome to App2</h1>
      <Button />
    </div>
  );
};

// Use ReactDOM.createRoot to render the application
const root = createRoot(document.getElementById('root'));
root.render(<App2 />);

export default App2;