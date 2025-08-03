import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ClientDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Client Dashboard</h1>

        <p className="text-lg text-gray-600 mb-6">
          Welcome back, <span className="font-semibold">{user?.name}</span>!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example Card 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Post a New Job</h2>
            <p className="text-gray-600 mb-4">Looking for talent? Start here.</p>
            <button
              onClick={() => navigate("/post-job")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Post Job
            </button>
          </div>

          {/* Example Card 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Your Projects</h2>
            <p className="text-gray-600 mb-4">Manage your ongoing work.</p>
            <button
              onClick={() => navigate("/projects")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </button>
          </div>

          {/* Example Card 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Messages</h2>
            <p className="text-gray-600 mb-4">Chat with freelancers.</p>
            <button
              onClick={() => navigate("/messages")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Open Messages
            </button>
          </div>

          {/* Example Card 4 */}
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
            <p className="text-gray-600 mb-4">Update your information.</p>
            <button
              onClick={() => navigate("/profile/client")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Go to Settings
            </button>
          </div>
        </div>

        <div className="mt-10 text-right">
          <button
            onClick={handleLogout}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
