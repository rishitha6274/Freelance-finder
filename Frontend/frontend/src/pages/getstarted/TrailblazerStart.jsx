import React from "react";
import { FaLaptopCode, FaCube, FaRocket, FaLayerGroup, FaStar, FaTools } from "react-icons/fa";

const TrailblazerStart = () => {
  const skills = ["Web3", "AI/ML", "3D Design", "AR/VR", "DevOps"];
  const badges = [
    { title: "Innovator", icon: <FaRocket className="text-pink-600" /> },
    { title: "Full-Stack Pro", icon: <FaLayerGroup className="text-indigo-500" /> },
    { title: "Open Source Champ", icon: <FaStar className="text-yellow-400" /> },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 px-6 md:px-20 pb-20 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
          The Trailblazer
        </h1>
        <p className="text-lg mb-6 text-center">
          You’re the cutting-edge force. Show off your stack, tools, and impact.
        </p>

        {/* Hero Tools Showcase */}
        <section className="bg-gray-100 p-6 rounded-2xl shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaTools /> Your Tech Toolkit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow hover:shadow-md transition text-center font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </section>

        {/* 3D Portfolio Viewer (Static Simulation) */}
        <section className="bg-gray-50 p-6 rounded-2xl shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaCube /> 3D Portfolio Preview
          </h2>
          <div className="relative w-full h-64 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
            <p className="text-purple-700 text-lg font-semibold text-center px-6">
              [ 3D Portfolio Module Coming Soon ] <br />
              Imagine live project models spinning here!
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white p-6 rounded-2xl shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaStar /> Skill Badges
          </h2>
          <div className="flex gap-8 flex-wrap justify-start">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full shadow-sm"
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm font-semibold">{badge.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final Call to Action */}
        <div className="text-center mt-10">
          <button className="bg-purple-700 text-white px-6 py-3 text-lg rounded-full hover:bg-purple-800 transition">
            Launch My Trailblazing Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailblazerStart;
