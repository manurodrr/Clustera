import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AgentDashboard from './pages/AgentDashboard';
import SupplierDashboard from './pages/SupplierDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AgentDashboard" element={<AgentDashboard />} />
        <Route path="/SupplierDashboard" element={<SupplierDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
