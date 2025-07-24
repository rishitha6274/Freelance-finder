import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup with:", { name, email, password });
    // Later: connect this to backend API
  };

  return (
    <>
      <div className="signup-container">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join Freelance Finder today</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-signup">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>

      {/* Inline CSS */}
      <style>{`
        .signup-container {
          max-width: 400px;
          margin: 4rem auto;
          padding: 2rem;
          border-radius: 8px;
          background: #f9f9f9;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .signup-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .signup-subtitle {
          font-size: 1rem;
          margin-bottom: 2rem;
          color: #555;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .signup-form input {
          padding: 0.7rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          transition: border 0.3s;
        }

        .signup-form input:focus {
          border-color: #4a90e2;
        }

        .btn-signup {
          padding: 0.8rem;
          font-size: 1rem;
          font-weight: bold;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-signup:hover {
          transform: scale(1.05);
          background-color: #3b7dd8;
        }

        .login-link {
          margin-top: 1.5rem;
          font-size: 0.9rem;
        }

        .login-link a {
          color: #4a90e2;
          text-decoration: none;
          font-weight: bold;
        }

        .login-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Signup;
