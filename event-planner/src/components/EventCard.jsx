// All references made can be found in the reading material for this Level, unless stated otherwise.
import { useNavigate } from "react-router-dom";
import { useEvents } from "../contexts/EventContext";

export default function EventCard({ event }) {
  const navigate = useNavigate();
  const { deleteEvent } = useEvents();

  return (
    <div className="event-card">
      <h3>{event.eventName}</h3>

      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>{event.description}</p>

      <div className="actions">
        <button onClick={() => navigate(`/edit-event/${event.id}`)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteEvent(event.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
