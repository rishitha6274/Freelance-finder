import { useState } from "react";
import { FaTools, FaInbox, FaUserCheck, FaMedal, FaEnvelope } from "react-icons/fa";

const FixerStart = () => {
  const [inbox, setInbox] = useState([
    { id: 1, client: "Riya Patel", request: "Need help with a mobile app prototype." },
    { id: 2, client: "Arjun Verma", request: "Bug fix in backend API." },
  ]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20 px-6 md:px-20 pb-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
          The Fixer
        </h1>
        <p className="text-lg mb-6 text-center">
          You’re the expert who gets things done. Dive into client requests and start solving.
        </p>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaInbox /> Your Incoming Requests
          </h2>
          {inbox.length === 0 ? (
            <p className="text-gray-500">No requests at the moment.</p>
          ) : (
            <ul className="space-y-4">
              {inbox.map((item) => (
                <li
                  key={item.id}
                  className="p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => setSelectedMessage(item)}
                >
                  <strong>{item.client}:</strong> {item.request}
                </li>
              ))}
            </ul>
          )}
        </section>

        {selectedMessage && (
          <section className="mb-10 bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope /> Message from {selectedMessage.client}
            </h2>
            <p className="text-gray-700 mb-4">{selectedMessage.request}</p>
            <textarea
              placeholder="Type your reply..."
              className="w-full h-24 border border-gray-300 p-3 rounded-lg resize-none"
            />
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Send Reply
            </button>
          </section>
        )}

        <section className="bg-gray-100 p-6 rounded-2xl shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaMedal /> Your Progress
          </h2>
          <div className="flex gap-10">
            <div className="text-center">
              <FaUserCheck className="text-green-500 text-3xl mx-auto mb-1" />
              <p className="font-bold">85 Reputation</p>
              <p className="text-sm text-gray-500">Client Rated</p>
            </div>
            <div className="text-center">
              <FaMedal className="text-orange-400 text-3xl mx-auto mb-1" />
              <p className="font-bold">Trusted Fixer Badge</p>
              <p className="text-sm text-gray-500">Awarded</p>
            </div>
          </div>
        </section>

        <div className="text-center mt-10">
          <button className="bg-green-700 text-white px-6 py-3 text-lg rounded-full hover:bg-green-800 transition">
            View More Requests
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixerStart;
