
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  email: string;
  name: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    if (email === "admin@shop.com" && password === "admin123") {
      const adminUser = { id: "1", email, name: "Admin User", isAdmin: true };
      setUser(adminUser);
      toast({
        title: "Welcome back!",
        description: "You've been successfully logged in.",
      });
      return true;
    } else if (email && password) {
      const regularUser = { id: "2", email, name: "John Doe" };
      setUser(regularUser);
      toast({
        title: "Welcome back!",
        description: "You've been successfully logged in.",
      });
      return true;
    }
    toast({
      title: "Login failed",
      description: "Invalid email or password.",
      variant: "destructive",
    });
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate API call
    if (email && password && name) {
      const newUser = { id: Date.now().toString(), email, name };
      setUser(newUser);
      toast({
        title: "Welcome!",
        description: "Your account has been created successfully.",
      });
      return true;
    }
    toast({
      title: "Signup failed",
      description: "Please fill in all required fields.",
      variant: "destructive",
    });
    return false;
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
