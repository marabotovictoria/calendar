// All references made can be found in the reading material for this Level, unless stated otherwise.
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useEvents } from "../contexts/EventContext";

export default function EventForm({ existingEvent = null, onSubmitSuccess }) {
  const { currentUser } = useAuth();
  const { addEvent, updateEvent } = useEvents();
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (existingEvent) {
      setFormData(existingEvent);
    }
  }, [existingEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const isFutureDate = (date, time) => {
    const eventDate = new Date(`${date} ${time}`);

    const now = new Date();

    return eventDate >= now;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { eventName, date, time, location, description } = formData;

    if (!eventName || !date || !time || !location || !description) {
      setError("All fields are required.");
      return;
    }

    if (!isFutureDate(date, time)) {
      setError("You cannot create events in the past.");
      return;
    }

    if (existingEvent) {
      updateEvent({
        ...existingEvent,
        ...formData,
      });
    } else {
      const newEvent = {
        id: Date.now(),
        username: currentUser.username,
        ...formData,
      };

      addEvent(newEvent);
    }

    setError("");

    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  return (
    <div className="form">
      <h1>{existingEvent ? "Edit Event" : "Add Event"}</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}

        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          name="eventName"
          placeholder="Enter Event Name"
          value={formData.eventName}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={formData.location}
          onChange={handleChange}
        />

        <label htmlFor="description">Decription:</label>
        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">
          {existingEvent ? "Update Event" : "Add Event"}
        </button>
      </form>
    </div>
  );
}
