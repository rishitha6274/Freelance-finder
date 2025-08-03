import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("ff_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (payload) => {
    setUser(payload);
    localStorage.setItem("ff_user", JSON.stringify(payload));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", payload.role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ff_user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
