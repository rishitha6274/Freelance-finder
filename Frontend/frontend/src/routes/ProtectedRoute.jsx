import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setChecking(false), 100); 
    return () => clearTimeout(timer);
  }, []);

  if (checking) {
    return <div className="pt-20 text-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
