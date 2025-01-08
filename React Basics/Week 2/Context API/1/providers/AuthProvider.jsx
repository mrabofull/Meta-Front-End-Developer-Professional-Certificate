import React, { useState } from 'react';

// Creating a context to hold the auth state
const AuthContext = React.createContext();

// AuthProvider component that provides the context value to children components
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log('User logged in');
  };

  const logout = () => {
    setIsAuthenticated(false);
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the auth context
export const useAuthContext = () => React.useContext(AuthContext);

export default AuthProvider;
