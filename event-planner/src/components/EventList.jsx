// All references made can be found in the reading material for this Level, unless stated otherwise.
import EventCard from "./EventCard";

export default function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
