import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createRoot } from 'react-dom';

// Adjust the import paths to match your project structure
const RemoteApp1 = React.lazy(() => import('../../App1/src/AppWrapper'));
const RemoteApp2 = React.lazy(() => import('../../App2/src/AppWrapper'));

const App = () => {
  return (
    <div>
      <div
        style={{
          height: '60px',
          backgroundColor: '#282c34',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        <button onClick={() => navigate('/auth/login')}>Login</button>
      </div>
      <div>
        <Router>
          <Route path="/app1" element={<RemoteApp1 />} />
          <Route path="/app2" element={<RemoteApp2 />} />
        </Router>
      </div>
    </div>
  );
};

// Use ReactDOM.createRoot to render the application
const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
