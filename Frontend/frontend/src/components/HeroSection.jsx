import { Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">
          The Future of <br /> Freelancing, Rewired...
        </h1>
        <p className="hero-subtitle">
          Where New Talent Gets the Spotlight !! <br />
          You Bring the Skill. We Bring the Stage.
        </p>
        <h4>
          {" "}
          <Rocket
            style={{ width: "24px", height: "24px", color: "#fff" }}
          />{" "}
          Welcome to the platform where being underrated is your superpower.
        </h4>
        <h4>
          {" "}
          <Rocket
            style={{ width: "28px", height: "28px", color: "#fff" }}
          />{" "}
          You don’t need a portfolio. You need a shot. We’ve got it.
        </h4>

        <div className="hero-cta">
          <button className="btn btn-primary">I’m a Freelancer</button>
          <button className="btn btn-secondary">I’m a Client</button>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>“Great platform! Found my first client within 24 hours.” – User A</p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Smart job matching</li>
          <li>Secure payments with escrow</li>
          <li>Real-time chat and notifications</li>
        </ul>
      </section>

      <section className="trust-badges">
        <h2>Trusted by 100+ Clients</h2>
        <div className="badges">
          <span>✔ Verified</span>
          <span>✔ Secure</span>
          <span>✔ Reliable</span>
        </div>
      </section>

      <section className="blog-preview">
        <h2>From Our Blog</h2>
        <p>“5 Tips to Build a Strong Freelancer Profile”</p>
      </section>

      <style>{`
        .hero {
  position: relative;
  padding: 4rem 2rem;
  color: white;
  background: url('https://v1.pinimg.com/videos/mc/720p/83/e6/f4/83e6f4689c1025201ce25e0a3225f72e.mp4') no-repeat center center/cover;
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

        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 1rem;
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
          background-color: #ffd700;
          color: #333;
        }

        .btn-secondary {
          background-color: white;
          color: #4a90e2;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .testimonials, .features, .trust-badges, .blog-preview {
          text-align: center;
          padding: 2rem 1rem;
          background: #031b36ff;
          color: white;
        
        }

        .features ul {
          list-style: none;
          padding: 0;
        }

        .features li {
          margin: 0.5rem 0;
        }

        .badges span {
          margin: 0 0.5rem;
          background: #031b36ff;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
