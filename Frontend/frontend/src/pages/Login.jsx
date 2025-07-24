import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Login to your Freelance Finder account</p>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button type="submit" className="btn-login">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>

      <style>{`
        .login-container {
          max-width: 400px;
          margin: 4rem auto;
          padding: 2rem;
          border-radius: 8px;
          background: #f9f9f9;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .login-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .login-subtitle {
          font-size: 1rem;
          margin-bottom: 2rem;
          color: #555;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .login-form input {
          padding: 0.7rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          transition: border 0.3s;
        }

        .login-form input:focus {
          border-color: #4a90e2;
        }

        .btn-login {
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

        .btn-login:hover {
          transform: scale(1.05);
          background-color: #3b7dd8;
        }

        .signup-link {
          margin-top: 1.5rem;
          font-size: 0.9rem;
        }

        .signup-link a {
          color: #4a90e2;
          text-decoration: none;
          font-weight: bold;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Login;
