import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({});

export const useToken = () => {
  const [{ token }] = useContext(AuthContext);

  return token;
}

export default function AuthProvider({ children }) {
  const authState = useState({});

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
}
