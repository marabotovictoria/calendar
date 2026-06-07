// All references made can be found in the reading material for this Level, unless stated otherwise.
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import EventForm from "../components/EventForm";

export default function AddEvent() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <EventForm onSubmitSuccess={() => navigate("/dashboard")} />;
}
