import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [role, setRole] = useState("freelancer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email address");
      return;
    }

    const user = {
      name,
      email,
      role,
    };

    login(user); // store in context and localStorage

    if (role === "freelancer") {
      navigate("/freelancerlanding");
    } else {
      navigate("/clientlanding");
    }
  };

  return (
    <>
      <div className="signup-container">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join Freelance Finder today</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <select value={role} onChange={(e) => setRole(e.target.value)} className="role-selector" required>
            <option value="freelancer">I'm a Freelancer</option>
            <option value="client">I'm a Client</option>
          </select>
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
          Already have an account? <a href="/login?role=freelancer">Login</a>
        </p>
      </div>

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

        .signup-form input, .role-selector {
          padding: 0.7rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          transition: border 0.3s;
        }

        .signup-form input:focus, .role-selector:focus {
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
