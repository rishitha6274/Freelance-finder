import { useState, useEffect } from "react";
import { FaLightbulb, FaRegSave, FaStar, FaMedal } from "react-icons/fa";

const DreamerStart = () => {
  const [idea, setIdea] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedDraft = localStorage.getItem("dreamerIdeaDraft");
    if (savedDraft) setIdea(savedDraft);
  }, []);

  const handleSave = () => {
    localStorage.setItem("dreamerIdeaDraft", idea);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20 px-6 md:px-20 pb-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
          The Dreamer
        </h1>
        <p className="text-lg mb-4 text-center">
          Have a bold idea that could change the game? This is your launchpad.
        </p>

        <section className="mb-10 bg-indigo-50 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaLightbulb /> Draft Your Idea
          </h2>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your idea..."
            className="w-full p-4 rounded-lg border border-indigo-200 h-40 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          />
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <FaRegSave className="inline mr-2" />
              Save Draft
            </button>
            {saved && (
              <span className="text-green-600 font-medium">Draft Saved!</span>
            )}
          </div>
        </section>

        <section className="mb-10 bg-white border p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Your Progress</h2>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <FaStar className="text-yellow-500 text-3xl mx-auto mb-1" />
              <p className="font-bold">120 XP</p>
              <p className="text-sm text-gray-500">Earned</p>
            </div>
            <div className="text-center">
              <FaMedal className="text-blue-500 text-3xl mx-auto mb-1" />
              <p className="font-bold">Innovator Badge</p>
              <p className="text-sm text-gray-500">Achieved</p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Ready to Make It Real?</h2>
          <p className="mb-6">
            Turn your saved draft into a real job post when you’re ready.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition">
            Post Your Idea
          </button>
        </section>
      </div>
    </div>
  );
};

export default DreamerStart;
