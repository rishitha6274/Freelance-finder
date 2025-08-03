import React from "react";
import { Link } from "react-router-dom";

const FreelancerDashboard = () => {
  return (
    <main className="pt-20 px-6 md:px-16 pb-16 min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-indigo-800">
          🎯 Your Freelancer Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Track your gigs, proposals, earnings, and profile performance.
        </p>
      </header>

      {/* Dashboard Cards */}
      <section
        aria-label="Freelancer Stats"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <DashboardCard title="💰 Earnings" value="$2,450" sub="This month" color="green" />
        <DashboardCard
          title="🛠 Active Gigs"
          value="4"
          link="/dashboard/freelancer/gigs"
          linkLabel="Manage Gigs →"
          color="indigo"
        />
        <DashboardCard
          title="📨 Proposals"
          value="3"
          link="/explore/projects"
          linkLabel="Find New Projects →"
          color="yellow"
        />
        <DashboardCard
          title="📈 Profile Views"
          value="125"
          link="/dashboard/freelancer/profile"
          linkLabel="Edit Profile →"
          color="purple"
        />
        <DashboardCard title="⭐ Reviews" value="4.8 / 5" sub="Based on 28 reviews" color="red" />
      </section>

      {/* Tip */}
      <section className="mt-16 bg-indigo-100 border border-indigo-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">🚀 Pro Tip</h3>
        <p className="text-sm text-indigo-700">
          Keep your profile up-to-date and respond to messages quickly to boost your visibility!
        </p>
      </section>
    </main>
  );
};

// Reusable Card Component
const DashboardCard = ({ title, value, sub, link, linkLabel, color }) => (
  <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
    <h2 className={`text-lg font-semibold text-${color}-700`}>{title}</h2>
    <p className="mt-2 text-2xl font-bold">{value}</p>
    {sub && <p className="text-sm text-gray-500 mt-1">{sub}</p>}
    {link && (
      <Link
        to={link}
        className={`text-sm text-${color}-600 hover:underline mt-1 inline-block`}
      >
        {linkLabel}
      </Link>
    )}
  </div>
);

export default FreelancerDashboard;
