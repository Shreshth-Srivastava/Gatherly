import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { EventItem } from "../data/events";

export default function EventDetail({ events }: { events: EventItem[] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => String(e.id) === id);
  const [joined, setJoined] = useState(false);

  if (!event) return <div className="card">Event not found</div>;

  return (
    <div className="card p-4 bg-[var(--light-black)] rounded">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">{event.title}</h1>
          <div className="text-sm text-muted">
            {event.type} • {event.location}
          </div>
        </div>
        <div className="text-sm text-muted">{event.date}</div>
      </div>

      <p className="mb-4">{event.description}</p>

      <div className="mb-4 text-sm">
        <div>
          <strong>Host:</strong> {event.host}
        </div>
        <div>
          <strong>Location:</strong> {event.location}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => {
            setJoined(true);
            setTimeout(() => navigate(`/`), 1200);
          }}
          className="px-4 py-2 rounded-lg bg-accent font-semibold bg-green-600 hover:bg-green-700 cursor-pointer"
        >
          RSVP / Join
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-lg border border-white/10 cursor-pointer hover:border-white"
        >
          Back
        </button>
      </div>

      {joined && (
        <div className="mt-4 p-3 bg-accent/10 rounded-lg">
          <strong>You're in!</strong> Confirmation sent. Redirecting...
        </div>
      )}
    </div>
  );
}
