import React, { useState } from 'react';
import Login from './pages/Login';
import AgentDashboard from './pages/AgentDashboard';
import SupplierDashboard from './pages/SupplierDashboard';

function App() {
  const [userType, setUserType] = useState(null);

  const handleLogin = (username) => {
    if (username === 'agent') {
      setUserType('agent');
    } else if (username === 'supplier') {
      setUserType('supplier');
    }
  };

  return (
    <div className="App">
      {!userType ? (
        <Login onLogin={handleLogin} />
      ) : userType === 'agent' ? (
        <AgentDashboard />
      ) : (
        <SupplierDashboard />
      )}
    </div>
  );
}

export default App;
