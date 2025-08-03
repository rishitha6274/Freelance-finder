import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Freelance Finder</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>

          {user ? (
            <>
             
              <button className="logout-btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: transparent;
          position: fixed;
          width: 95%;
          top: 0;
          left: 0;
          color: white;
          z-index: 10;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #6366f1;
        }
        .nav-links {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }
        .nav-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color .2s;
        }
        .nav-links a:hover {
          color: #6366f1;
        }
        .logout-btn {
          background: transparent;
          border: 1px solid #6366f1;
          color: #6366f1;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .logout-btn:hover {
          background: #6366f1;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Navbar;
