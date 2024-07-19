import React from 'react';
import Button from './components/Button';
import ReactDOM from 'react-dom/client';

const App1 = () => {
  return (
    <div>
      <h1>Welcome to App1</h1>
      <Button />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    
    <App1 />
    
  
);

export default App1;