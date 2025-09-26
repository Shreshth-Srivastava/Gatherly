import React from "react";
import type { EventType } from "../data/events";

const TYPES: EventType[] = [
  "Workshop",
  "Music",
  "Sports",
  "Meetup",
  "Fitness",
  "Social",
  "Entertainment",
];

export default function Filters({
  onTypeChange,
  onLocationChange,
  onDateChange,
}: {
  onTypeChange: (t: string) => void;
  onLocationChange: (l: string) => void;
  onDateChange: (d: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm">Type</label>
        <select
          onChange={(e) => onTypeChange(e.target.value)}
          className="mt-1 w-full rounded-lg bg-bg/50 p-2"
        >
          <option value="" className="bg-black">
            All
          </option>
          {TYPES.map((t) => (
            <option key={t} value={t} className="bg-black">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm">Location</label>
        <input
          onChange={(e) => onLocationChange(e.target.value)}
          placeholder="City or area"
          className="mt-1 w-full rounded-lg bg-bg/50 p-2"
        />
      </div>

      <div>
        <label className="block text-sm">Date</label>
        <input
          onChange={(e) => onDateChange(e.target.value)}
          type="date"
          className="mt-1 w-full rounded-lg bg-bg/50 p-2"
        />
      </div>
    </div>
  );
}
