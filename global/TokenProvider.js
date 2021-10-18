import React, { createContext, useContext, useState } from 'react';

export const TokenContext = createContext(null);

export const useToken = () => {
  const [token] = useContext(TokenContext);

  if (token == null) {
    throw new Error("Seems like you don't have a valid token");
  }

  return token;
}

export default function TokenProvider({ children }) {
  const tokenSate = useState(null);

  return (
    <TokenContext.Provider value={tokenSate}>
      {children}
    </TokenContext.Provider>
  );
}
