export type EventType =
  | "Workshop"
  | "Music"
  | "Sports"
  | "Meetup"
  | "Fitness"
  | "Other";

export interface EventItem {
  id: number;
  title: string;
  type: EventType;
  date: string; // ISO yyyy-mm-dd
  location: string;
  host: string;
  description: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Community Yoga Session",
    type: "Fitness",
    date: "2025-08-20",
    location: "Bangalore",
    host: "Yoga with Anu",
    description: "Join us for a peaceful yoga session in Cubbon Park.",
  },
  {
    id: 2,
    title: "Indie Music Night",
    type: "Music",
    date: "2025-09-05",
    location: "Mumbai",
    host: "Sound Collective",
    description: "An evening of local indie bands and acoustic sets.",
  },
  {
    id: 3,
    title: "React Workshop for Beginners",
    type: "Workshop",
    date: "2025-10-12",
    location: "Bangalore",
    host: "CodeCraft",
    description: "Hands-on workshop to learn React fundamentals.",
  },
  {
    id: 4,
    title: "Saturday Football Meetup",
    type: "Sports",
    date: "2025-08-30",
    location: "Delhi",
    host: "City Sports",
    description: "Friendly 7-a-side football match. All skill levels welcome.",
  },
];
