import React from 'react';

const Explore = () => {
  const vibes = ["Quick & Tactical", "Inventive & Bold", "Precise & Elegant"];
  const challenges = [
    "Clean up legacy code with a twist",
    "Turn my sketch into a branding marvel"
  ];
  const labs = ["Prompt Engineering", "Voice UX Design", "AI Content Curators"];
  const trends = [
    "🚀 FastAPI devs on fire this week 🔥",
    "💫 Logo animations are booming!"
  ];

  return (
    <div className="bg-white text-gray-800 px-6 py-20 space-y-16 max-w-7xl mx-auto">
      
      {/*  Skill Galaxy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🎨 Skill Galaxy</h2>
        <div className="relative bg-gray-50 overflow-hidden h-[400px] rounded-2xl shadow-inner flex items-center justify-center text-gray-400">
\          <p>🌌 Interactive constellation map here</p>
        </div>
      </section>

      {/*  AI-Powered Match Filters */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🧬 AI-Powered Match Filters</h2>
        <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-xl shadow-sm">
          {vibes.map((vibe) => (
            <button
              key={vibe}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-indigo-50 transition"
            >
              {vibe}
            </button>
          ))}
        </div>
      </section>

      {/*  Micro Portfolios in Motion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">📜 Micro Portfolios in Motion</h2>
        <div className="flex overflow-x-auto gap-4 py-2">
          {[1, 2, 3].map((id) => (
            <div key={id} className="min-w-[280px] bg-white rounded-xl shadow hover:shadow-md transition p-4">
              <div className="bg-gray-200 h-40 rounded-md flex items-center justify-center text-gray-500">
                GIF/Image Demo
              </div>
              <div className="mt-3 text-sm flex justify-between text-indigo-600">
                <button className="hover:underline">Save</button>
                <button className="hover:underline">Connect</button>
                <button className="hover:underline">Deep Dive</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Trend Pulse Bar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">📈 Trend Pulse Bar</h2>
        <div className="bg-indigo-50 text-indigo-800 px-4 py-3 rounded-lg shadow-inner animate-pulse">
          {trends.join(" | ")}
        </div>
      </section>

      {/*  Hidden Gems Spotlight */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🕵️‍♂️ Hidden Gems Spotlight</h2>
        <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md">
          <h3 className="text-xl font-semibold mb-2">🎯 Hidden Gem</h3>
          <p className="text-gray-600 mb-2">“A backend genius who also illustrates book covers in watercolor.”</p>
          <button className="mt-2 text-sm text-indigo-600 hover:underline">View Profile</button>
        </div>
      </section>

      {/*  Experimental Categories */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🧪 Experimental Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {labs.map((cat) => (
            <div
              key={cat}
              className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg text-sm hover:bg-white hover:shadow transition"
            >
              🧪 {cat}
            </div>
          ))}
        </div>
      </section>

      {/*  “Challenge Me” Deck */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🧑‍🚀 “Challenge Me” Deck</h2>
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 w-full max-w-md shadow-lg"
          >
            <h4 className="text-lg font-bold mb-2">🎲 Challenge</h4>
            <p className="text-gray-600 mb-3">{challenge}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Pitch Response
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Explore;
