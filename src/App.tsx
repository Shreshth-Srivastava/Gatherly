import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Explore from "./pages/Explore";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";
import { EVENTS } from "./data/events";

export default function App() {
  const [events, setEvents] = useState(EVENTS);

  function addEvent(newEvent: (typeof EVENTS)[number]) {
    setEvents((s) => [{ ...newEvent, id: Date.now() }, ...s]);
  }

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-6">
        <Link to="/" className="text-2xl font-semibold text-white">
          Gatherly
        </Link>
        <nav className="flex gap-3 items-center">
          <Link
            to="/create"
            className="px-3 py-2 rounded bg-accent/20 text-accent bg-blue-500 hover:bg-blue-600 p-2"
          >
            Host an event
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Explore events={events} />} />
          <Route path="/event/:id" element={<EventDetail events={events} />} />
          <Route path="/create" element={<CreateEvent onCreate={addEvent} />} />
        </Routes>
      </main>

      <footer className="mt-12 text-sm text-muted">
        Made by Shreshth Srivastava
      </footer>
    </div>
  );
}
