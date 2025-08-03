// src/pages/badges/PixelPerfectionist.jsx
import React from "react";

const PixelPerfectionist = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 text-center">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">🖼️ Pixel Perfectionist</h1>
      <p className="text-gray-800 text-lg max-w-3xl mx-auto mb-6">
        Given to those who make every pixel count. Your interfaces don’t just work — they *wow*.
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-left">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🌟 Criteria:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Delivered 10+ high-fidelity UI projects</li>
          <li>Mobile-first design perfection</li>
          <li>Used accessible color palettes & layouts</li>
          <li>Client approval rate of 100%</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-blue-700">💬 What Clients Say:</h2>
        <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
          “They translated our vision into an interface that looked and felt like magic.”
        </blockquote>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-blue-700">🎯 Skills Honored:</h2>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">UI/UX</span>
          <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Figma</span>
        </div>
      </div>
    </div>
  );
};

export default PixelPerfectionist;
