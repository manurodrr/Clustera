import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clusteraLogo from '../assets/Clustera.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsers = ['Clustera_Agent', 'Clustera_Supplier'];

    if (validUsers.includes(username) && password === username) {
      if (username === 'Clustera_Agent') {
        navigate('/AgentDashboard');
      } else if (username === 'Clustera_Supplier') {
        navigate('/SupplierDashboard');
      }
    } else {
      alert('Credenciales inválidas. Intenta de nuevo.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <img src={clusteraLogo} alt="Clustera Logo" style={styles.logo} />
        <h1 style={styles.title}>Login</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...styles.input, marginBottom: 0 }}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={styles.toggleButton}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1e1e1e',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.25)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  logo: {
    width: '150px',
    marginBottom: '1.5rem',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
    fontSize: '2rem',
  },
  input: {
    width: '100%',
    padding: '0.6rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: '1rem',
  },
  toggleButton: {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  button: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1rem',
    cursor: 'pointer',
    borderRadius: '6px',
    fontSize: '1rem',
  },
};

export default Login;