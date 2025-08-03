import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import FreelancerLandingPage from "./pages/FreelancerLandingPage";
import ClientLandingPage from "./pages/ClientLandingPage";
import ClientDashboard from "./pages/dashboards/ClientDashboard";
import FreelancerDashboard from "./pages/dashboards/FreelancerDashboard";
import DreamerStart from "./pages/getstarted/DreamerStart";
import FixerStart from "./pages/getstarted/FixerStart";
import TrailblazerStart from "./pages/getstarted/TrailblazerStart";
import BugSlayer from "./pages/badges/BugSlayer";
import PixelPerfectionist from "./pages/badges/PixelPerfectionist";
import LevelUpProject from "./pages/badges/LevelUpProject";


import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/get-started/dreamer" element={<DreamerStart />} />
<Route path="/get-started/fixer" element={<FixerStart />} />
<Route path="/get-started/trailblazer" element={<TrailblazerStart />} />

        <Route path="/freelancerlanding" element={<FreelancerLandingPage />} />
        <Route path="/clientlanding" element={<ClientLandingPage />} />

        <Route path="/dashboard/freelancer" element={
          <ProtectedRoute>
            <RoleRoute allowed={["freelancer"]}>
              <FreelancerDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }/>

        <Route path="/dashboard/client" element={
          <ProtectedRoute>
            <RoleRoute allowed={["client"]}>
              <ClientDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }/>
<Route path="/badges/bug-slayer" element={<BugSlayer />} />
<Route path="/badges/pixel-perfectionist" element={<PixelPerfectionist />} />
<Route path="/badges/level-up-project" element={<LevelUpProject />} />
        <Route path="*" element={<div className="pt-20 text-center">404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
