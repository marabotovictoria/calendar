// All references made can be found in the reading material for this Level, unless stated otherwise.
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEvents } from "../contexts/EventContext";
import EventList from "../components/EventList";
import "../App.css";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const { events } = useEvents();
  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const userEvents = events.filter(
    (event) => event.username === currentUser.username,
  );

  const sortEvents = [...userEvents].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Welcome, {currentUser.name}</h1>

        <button onClick={() => navigate("/add-event")}>Add Event</button>
      </div>

      {sortEvents.length === 0 ? (
        <p className="no-events">No events.</p>
      ) : (
        <EventList events={sortEvents} />
      )}
    </div>
  );
}
