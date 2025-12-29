// AuthContext.tsx
import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  email: string | null;
  setEmail: (email: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
