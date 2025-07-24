import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  // user example: { id, name, role: 'client' | 'freelancer', token }

  useEffect(() => {
    const saved = localStorage.getItem("ff_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (payload) => {
    // payload should come from your backend login API
    // e.g. { id, name, role, token }
    setUser(payload);
    localStorage.setItem("ff_user", JSON.stringify(payload));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ff_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
