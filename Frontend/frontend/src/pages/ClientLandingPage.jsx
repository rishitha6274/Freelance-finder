import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ClientLandingPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard/client");
  };

  return (
    <main className="min-h-screen bg-white pt-28 px-6 lg:px-20 text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Welcome Back, {user?.name || "Client"} 👋
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Find and hire the perfect freelancers to bring your ideas to life.
        </p>
        <button
          onClick={goToDashboard}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition duration-200"
        >
          Go to Dashboard
        </button>
      </section>

      {/* Why Hire Section */}
      <section className="mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-center">
          🚀 Why Hire on Our Platform?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">⚡ Talent With a Track Record</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>⭐ Client ratings after every project</li>
              <li>🏅 Skill-specific badges</li>
              <li>📈 XP levels to identify active, reliable freelancers</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🧬 Smart Search. No Spam.</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>🔍 Multi-skilled talent (React + UX, Copy + SEO)</li>
              <li>🚀 Discover trending niche experts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Matching Section */}
      <section className="mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-center">
          🎯 Find Talent by Skill and Vibe
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-700">
              Want someone quick & tactical? Or bold & inventive? Filter by energy,
              not just expertise. Because the right fit is more than just a stack.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🪄 Get Matched Instantly — Or Go Wild</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Drop a project brief and get curated matches</li>
              <li>Explore “Challenge Me” decks with bold ideas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-center">
          🛡️ Secure. Transparent. Stress-Free.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <p>🔐 Escrow-protected payments</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <p>🕒 Real-time project tracking</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <p>📬 Built-in chat & file sharing + 📜 Dispute support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-blue-50 rounded-xl shadow-inner">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">🔥 Need Work Done? Start Here.</h2>
        <ul className="text-gray-700 space-y-2 text-lg mb-6">
          <li>✏️ Post a project in 2 minutes</li>
          <li>⚡ Get matched instantly</li>
          <li>🧑‍🎨 Pick from verified creatives & coders</li>
          <li>💬 Collaborate and pay securely</li>
        </ul>
        <button
          onClick={goToDashboard}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
        >
          Go to Dashboard
        </button>
      </section>
    </main>
  );
};

export default ClientLandingPage;
