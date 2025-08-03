import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FreelancerLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 px-6 md:px-16 pb-16 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Back, Creator 🌟
        </h1>
        <p className="mt-2 text-gray-500">
          Let’s build something amazing today!
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gigs */}
        <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700 mb-2">Your Gigs</h2>
          <p className="text-gray-500 mb-4">
            View, edit, or pause your gigs and services.
          </p>
          <Link to="/dashboard/freelancer/gigs" className="text-indigo-600 hover:underline">
            Manage Gigs →
          </Link>
        </div>

        {/* Opportunities */}
        <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700 mb-2">Open Projects</h2>
          <p className="text-gray-500 mb-4">
            Browse new client projects and submit proposals.
          </p>
          <Link to="/explore/projects" className="text-indigo-600 hover:underline">
            Find Work →
          </Link>
        </div>

        {/* Profile */}
        <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700 mb-2">Your Profile</h2>
          <p className="text-gray-500 mb-4">
            Polish your portfolio and showcase your expertise.
          </p>
          <Link to="/dashboard/freelancer/profile" className="text-indigo-600 hover:underline">
            Edit Profile →
          </Link>
        </div>
      </div>

      {/* XP Section */}
      <div className="mt-16 bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4">
          🎖 Level Up Your Freelancer XP
        </h2>
        <p className="text-gray-600 mb-4">
          Earn badges for fast turnarounds, great reviews, and creativity. Show clients you’re the real deal.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-white rounded-full shadow text-sm text-indigo-600">💡 Deadline Ninja</span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-sm text-indigo-600">🎨 Pixel Perfectionist</span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-sm text-indigo-600">🔧 Bug Slayer</span>
        </div>
      </div>

      {/*  Dashboard Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/dashboard/freelancer")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default FreelancerLandingPage;
