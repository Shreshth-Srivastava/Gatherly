// import React from "react";
import { Link } from "react-router-dom";
import type { EventItem } from "../data/events";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="card flex flex-col gap-3 bg-[var(--light-black)] p-4 rounded">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <div className="text-sm text-muted">
            {event.type} • {event.location}
          </div>
        </div>
        <div className="text-left md:text-right text-sm w-full md:w-fit">
          <div className="font-medium">{event.date}</div>
          <Link
            to={`/event/${event.id}`}
            className="mt-2 inline-block w-full text-center text-xs px-3 py-1 rounded-md bg-accent/20 text-accent bg-blue-500 hover:bg-blue-600"
          >
            Details
          </Link>
        </div>
      </div>
      <p className="text-sm text-muted line-clamp-3">{event.description}</p>
      <div className="flex items-center justify-between text-xs text-muted">
        <div>Host: {event.host}</div>
        <div className="italic">ID: {event.id}</div>
      </div>
    </article>
  );
}
