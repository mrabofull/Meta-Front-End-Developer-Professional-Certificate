import React from 'react';
import { useAuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuthContext();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Dashboard</h2>
          <p>Welcome to your dashboard!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>Please log in to access the dashboard.</h3>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
