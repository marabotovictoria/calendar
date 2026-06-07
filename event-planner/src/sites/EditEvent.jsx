// All references made can be found in the reading material for this Level, unless stated otherwise.
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEvents } from "../contexts/EventContext";
import EventForm from "../components/EventForm";

export default function EditEvent() {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { events } = useEvents();
  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const eventToEdit = events.find((event) => event.id === Number(id));

  if (!eventToEdit) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <EventForm
      existingEvent={eventToEdit}
      onSubmitSuccess={() => navigate("/dashboard")}
    />
  );
}
