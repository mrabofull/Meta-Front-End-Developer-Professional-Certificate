import React, { useState } from 'react';
import { useAuthContext } from '../providers/AuthProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();

  const handleLogin = () => {
    if (username) {
      login();
      console.log(`User ${username} logged in`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
