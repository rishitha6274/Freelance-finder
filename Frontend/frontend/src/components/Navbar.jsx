import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const dashboardPath = user ? `/dashboard/${user.role}` : "#";

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Freelance Finder</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/explore">Explore</a>

          {user ? (
            <>
              <a href={dashboardPath}>Dashboard</a>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="/signup">Sign Up</a>
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
          background-color: grey;
          color: white;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color .2s;
        }
        .nav-links a:hover {
          color: #ffd700;
        }
        .logout-btn {
          background: transparent;
          border: 1px solid white;
          color: white;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .logout-btn:hover {
          background: white;
          color: grey;
        }
      `}</style>
    </>
  );
};

export default Navbar;
