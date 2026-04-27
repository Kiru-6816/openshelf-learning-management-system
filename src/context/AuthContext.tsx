import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'student' | 'teacher', redirectPath?: string) => Promise<string>;
  signup: (name: string, email: string, password: string, role: 'student' | 'teacher', redirectPath?: string) => Promise<string>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: 'student' | 'teacher', redirectPath?: string) => {
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name: email.split('@')[0],
      email,
      role,
    });
    return redirectPath || `/${role}/dashboard`;
  };

  const signup = async (name: string, email: string, password: string, role: 'student' | 'teacher', redirectPath?: string) => {
    // Mock signup - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name,
      email,
      role,
    });
    return redirectPath || `/${role}/dashboard`;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}