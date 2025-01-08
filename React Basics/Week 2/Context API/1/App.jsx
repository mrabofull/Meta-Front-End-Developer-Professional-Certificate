import React from 'react';
import './App.css';
import AuthProvider from './providers/AuthProvider';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <div>
          <h1>Welcome to the Authentication App</h1>
          <Login />
          <Dashboard />
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
