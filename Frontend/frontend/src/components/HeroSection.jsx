import { Rocket } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Banner */}
      <section className="hero">
        <h1 className="hero-title">
          The Future of <br /> Freelancing, Rewired...
        </h1>
        <p className="hero-subtitle">
          Where New Talent Gets the Spotlight !! <br />
          You Bring the Skill. We Bring the Stage.
        </p>
        <h4>
          <Rocket style={{ width: "24px", height: "24px", color: "#fff" }} />
          {" "}Welcome to the platform where being underrated is your superpower.
        </h4>
        <h4>
          <Rocket style={{ width: "28px", height: "28px", color: "#fff" }} />
          {" "}You don’t need a portfolio. You need a shot. We’ve got it.
        </h4>

        <div className="hero-buttons" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          <button className="btn btn-primary" onClick={() => navigate("/login?role=freelancer")}>
            I’m a Freelancer
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/login?role=client")}>
            I’m a Client
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Jobs That Actually Fit You",
                desc: "No more applying to random gigs. We send you projects that match your vibe and skills. Zero scroll fatigue."
              },
              {
                title: "Secure Payments. Always.",
                desc: "Work first. Get paid stress-free. Escrow’s got your back till the job’s done."
              },
              {
                title: "Newbies Get The Spotlight",
                desc: "Fresh profiles? No worries. We boost new talent so you don’t get lost in the crowd."
              },
              {
                title: "Instant Notifs, Real-Time Updates",
                desc: "No ghosting here. You’ll know the second a client views, messages, or accepts you."
              },
              {
                title: "Dashboard with Hustle Stats & Badges",
                desc: "Track your gigs, earnings, deadlines — and flex those hard-earned badges. All in one clean space."
              },
              {
                title: "Chat. Share Files. Collaborate.",
                desc: "Built-in tools so you don’t need to chase clients across 5 apps."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-gray-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🧭 How It Works</h2>
          <p className="text-gray-600 text-lg">Start your freelance journey in 3 simple steps.</p>
        </div>
        <div className="flex flex-col space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
            <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-3xl">📤</div>
            <div className="mt-4 md:mt-0 text-center md:text-left max-w-md">
              <h3 className="text-2xl font-semibold mb-2">Post Your Project</h3>
              <p className="text-gray-600">Tell us what you need — skills, budget, and deadline. Posting a project is quick and free.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-10">
            <div className="flex-shrink-0 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl">⚡</div>
            <div className="mt-4 md:mt-0 text-center md:text-right max-w-md">
              <h3 className="text-2xl font-semibold mb-2">Get Matched Instantly</h3>
              <p className="text-gray-600">We instantly show you the best freelancers that match your vibe. No endless browsing.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
            <div className="flex-shrink-0 w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-3xl">🤝</div>
            <div className="mt-4 md:mt-0 text-center md:text-left max-w-md">
              <h3 className="text-2xl font-semibold mb-2">Hire & Collaborate</h3>
              <p className="text-gray-600">Chat, share files, and track your project right on the platform. Built-in tools make collaboration seamless.</p>
            </div>
          </div>
        </div>
      </section>

     {/* Footer CTA */}
<section className="py-20 px-6 bg-[#f9fbfc] text-center">
  <h2 className="text-4xl font-bold text-[#031b36] mb-8">Begin Your Quest</h2>
  <div className="flex flex-col md:flex-row gap-6 justify-center">
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg w-full md:w-64 transition">
      <h3 className="text-xl font-bold text-[#031b36] mb-2">The Dreamer</h3>
      <p className="text-gray-600 mb-4">Post a bold idea.</p>
      <button
        className="text-[#031b36] font-semibold underline"
        onClick={() => navigate("/get-started/dreamer")}
      >
        Get Started
      </button>
    </div>
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg w-full md:w-64 transition">
      <h3 className="text-xl font-bold text-[#031b36] mb-2">The Fixer</h3>
      <p className="text-gray-600 mb-4">Find expert help.</p>
      <button
        className="text-[#031b36] font-semibold underline"
        onClick={() => navigate("/get-started/fixer")}
      >
        Get Started
      </button>
    </div>
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg w-full md:w-64 transition">
      <h3 className="text-xl font-bold text-[#031b36] mb-2">The Trailblazer</h3>
      <p className="text-gray-600 mb-4">Freelancers with cutting-edge tools.</p>
      <button
        className="text-[#031b36] font-semibold underline"
        onClick={() => navigate("/get-started/trailblazer")}
      >
        Explore
      </button>
    </div>
  </div>
</section>

     {/* Gamified Engagement Zone */}
<section className="py-20 px-6 bg-[#f2f7fa]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">🎲 Gamified Engagement Zone</h2>
    <p className="text-lg text-gray-600 mb-10">
      Level Up Your Project — Collaborators earn XP for milestones, reviews, and quick turnarounds.
    </p>
    <div className="grid gap-6 md:grid-cols-3">
      {/* Pixel Perfectionist */}
      <div
        onClick={() => navigate("/badges/pixel-perfectionist")}
        className="cursor-pointer bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Pixel Perfectionist 🖼️</h3>
        <p className="text-gray-600">Awarded for flawless UI deliveries.</p>
      </div>

      {/* Bug Slayer */}
      <div
        onClick={() => navigate("/badges/bug-slayer")}
        className="cursor-pointer bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-semibold text-red-600 mb-2">Bug Slayer 🐞</h3>
        <p className="text-gray-600">Squashed every bug on the board.</p>
      </div>

      {/* Level Up */}
      <div
        onClick={() => navigate("/badges/level-up-project")}
        className="cursor-pointer bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-semibold text-green-600 mb-2">Level Up Your Project 🎮</h3>
        <p className="text-gray-600">Earn XP for rapid progress and collaboration.</p>
      </div>
    </div>
  </div>
</section>


      {/* Custom CSS Styles */}
      <style>{`
        .hero {
          position: relative;
          padding: 4rem 2rem;
          color: white;
          background: url('https://i.pinimg.com/originals/da/50/09/da500959c4a72da8dd39ce88fc97208c.gif') no-repeat center center/cover;
          filter: brightness(1.9);
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #031b36cc, #01070ecc);
          z-index: 0;
        }

        .hero * {
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .btn {
          padding: 0.7rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-primary {
          background-color: white;
          color: #333;
        }

        .btn-secondary {
          background-color: white;
          color: #4a90e2;
        }

        .btn:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default HeroSection;
