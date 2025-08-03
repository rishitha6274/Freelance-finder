import React from "react";
import { FaPaintBrush, FaBug } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";

const GamifiedEngagementZone = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl mt-12 border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 flex justify-center items-center gap-2">
          🎲 Gamified Engagement Zone
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Level Up Your Project
        </p>
        <p className="text-gray-500 text-sm">
          Collaborators earn XP for milestones, reviews, and quick turnarounds.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        {/* Pixel Perfectionist */}
        <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
          <FaPaintBrush className="text-pink-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-800">Pixel Perfectionist 🖼️</h3>
          <p className="text-gray-600 mt-2">
            Awarded for flawless UI deliveries.
          </p>
        </div>

        {/* Bug Slayer */}
        <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
          <FaBug className="text-red-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-800">Bug Slayer 🐞</h3>
          <p className="text-gray-600 mt-2">
            Squashed every bug on the board.
          </p>
        </div>

        {/* Milestone Master */}
        <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
          <GiLevelEndFlag className="text-green-600 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-800">Milestone Master 🎯</h3>
          <p className="text-gray-600 mt-2">
            Completed goals ahead of schedule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamifiedEngagementZone;
