import { createContext, ReactNode, useState } from 'react';

interface AuthContextData {
  authenticated: boolean;
  authUser: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);

  function authUser() {
    setAuthenticated(!authenticated);
  }

  return (
    <AuthContext.Provider value={{ authenticated, authUser }}>
      { children }
    </AuthContext.Provider>
  );
}
