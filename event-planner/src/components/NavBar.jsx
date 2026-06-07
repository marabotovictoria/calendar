// All references made can be found in the reading material for this Level, unless stated otherwise.
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";

export default function NavBar() {
  const { currentUser, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-title">
        <h2>Event Planner</h2>
      </div>

      <nav>
        <ul className="navbar-links">
          {currentUser && (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-event">Add Event</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/help">Help</Link>
          </li>

          {!currentUser ? (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
