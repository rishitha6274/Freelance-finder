import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

import ClientDashboard from "./pages/dashboards/ClientDashboard";
import FreelancerDashboard from "./pages/dashboards/FreelancerDashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard/client"
          element={
            <RoleRoute allowed={["client"]}>
              <ClientDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/dashboard/freelancer"
          element={
            <RoleRoute allowed={["freelancer"]}>
              <FreelancerDashboard />
            </RoleRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
