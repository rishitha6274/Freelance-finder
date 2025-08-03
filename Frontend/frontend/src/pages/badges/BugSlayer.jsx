// src/pages/badges/BugSlayer.jsx
import React from "react";

const BugSlayer = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-gradient-to-br from-red-50 to-yellow-100 text-center">
      <h1 className="text-5xl font-extrabold text-red-700 mb-4">🐞 Bug Slayer</h1>
      <p className="text-gray-800 text-lg max-w-3xl mx-auto mb-6">
        Awarded to fearless freelancers who relentlessly hunt down bugs and deliver spotless software.
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-left">
        <h2 className="text-2xl font-bold text-red-600 mb-4">🔥 Criteria:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Resolved 100+ bugs across projects</li>
          <li>Maintained bug-free releases for 3 sprints</li>
          <li>Tested with 95%+ unit & integration coverage</li>
          <li>Received 5-star QA feedback</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-red-600">💬 What Clients Say:</h2>
        <blockquote className="italic text-gray-600 border-l-4 border-red-500 pl-4">
          “Delivered a complex fix in under 24 hours. Truly a bug-squashing ninja!”
        </blockquote>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-red-600">🎯 Skills Honored:</h2>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm">Debugging</span>
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">Test Automation</span>
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Version Control</span>
        </div>
      </div>
    </div>
  );
};

export default BugSlayer;
