import React from 'react';
import Button from './components/Button';
import ReactDOM from 'react-dom/client';

const App2 = () => {
  return (
    <div>
      <h1>Welcome to App2</h1>
      <Button />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    
    <App2 />
   
  
);

export default App2;