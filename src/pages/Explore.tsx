import { useMemo, useState } from "react";
import type { EventItem } from "../data/events";
import EventCard from "../shared/EventCard";
import Filters from "../shared/Filters";

interface Props {
  events: EventItem[];
}

export default function Explore({ events }: Props) {
  const [type, setType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (type && e.type !== type) return false;
      if (
        location &&
        !e.location.toLowerCase().includes(location.toLowerCase())
      )
        return false;
      if (date && e.date !== date) return false;
      return true;
    });
  }, [events, type, location, date]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <aside className="lg:col-span-1 card">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Filters
          onTypeChange={setType}
          onLocationChange={setLocation}
          onDateChange={setDate}
        />
      </aside>

      <section className="lg:col-span-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Explore Events</h2>
          <div className="text-sm text-muted">{filtered.length} events</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>
    </div>
  );
}
