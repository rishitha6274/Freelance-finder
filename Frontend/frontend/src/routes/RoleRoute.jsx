import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

/**
 * RoleRoute - Protects routes based on user's role
 * @param {object} props
 * @param {React.ReactNode} props.children - Components to render if access is allowed
 * @param {string[]} props.allowed - Allowed roles (e.g., ["client", "freelancer"])
 */
const RoleRoute = ({ children, allowed }) => {
  const { user } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setChecking(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (checking) {
    return <div className="pt-20 text-center">Loading...</div>;
  }

  if (!user || !allowed.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleRoute;
