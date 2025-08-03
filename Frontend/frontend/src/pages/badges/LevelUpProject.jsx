// src/pages/badges/LevelUpProject.jsx
import React from "react";

const LevelUpProject = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-gradient-to-br from-green-50 to-emerald-100 text-center">
      <h1 className="text-5xl font-extrabold text-green-700 mb-4">🎮 Level Up Your Project</h1>
      <p className="text-gray-800 text-lg max-w-3xl mx-auto mb-6">
        This badge is for teams who break barriers, beat deadlines, and evolve every sprint.
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-left">
        <h2 className="text-2xl font-bold text-green-700 mb-4">🚀 Criteria:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Delivered at least 3 major sprint goals</li>
          <li>On-time delivery rate above 95%</li>
          <li>Used agile retrospectives to improve velocity</li>
          <li>Collaborated effectively across roles</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-green-700">💬 What Clients Say:</h2>
        <blockquote className="italic text-gray-600 border-l-4 border-green-500 pl-4">
          “The energy and drive from this team was next-level. They crushed every milestone.”
        </blockquote>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-green-700">🎯 Skills Honored:</h2>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Agile Development</span>
          <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">Collaboration</span>
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">Sprint Planning</span>
        </div>
      </div>
    </div>
  );
};

export default LevelUpProject;
