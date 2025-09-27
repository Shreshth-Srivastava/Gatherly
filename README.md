# Gatherly

Gatherly is a simple web platform that helps users find, explore, and join local events based on their interests and location. Users can browse events, filter by type/date/location, RSVP to join, and even create their own events.

Live project link: https://gatherly-eight.vercel.app/

## 🚀 Features
- **Browse Events** – Explore a curated list of events with a clean grid layout.
- **Filter & Search** – Filter events by type, date, and location.
- **Event Details** – View event descriptions, host, date, and location.
- **RSVP / Join** – Quickly RSVP and get a confirmation.
- **Host Events** – Create new events with validation using a simple form.

## 🛠️ Tech Stack
- **React.js + TypeScript** – Component-based, strongly typed frontend.
- **Tailwind CSS** – Utility-first styling.
- **React Router** – Client-side routing for a smooth SPA experience.
- **React Hook Form** – Lightweight form validation.

## 📦 Installation & Setup

### Prerequisites
- Node.js 18 or newer
- npm or yarn package manager

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreshth-Srivastava/Gatherly.git
   cd gatherly
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open the local dev URL shown in the terminal (usually `http://localhost:5173`).

4. **Build for production**
   ```bash
   npm run build
   ```

   To preview the production build locally:
   ```bash
   npm run preview
   ```

## 📂 Project Structure
```
src/
├── App.tsx           # Main app + routes
├── data/events.ts    # Sample event data
├── pages/            # Explore, EventDetail, CreateEvent pages
├── shared/           # Reusable components (Filters, EventCard)
├── index.css         # Tailwind + global styles
└── main.tsx          # Entry point
```

## 🔮 Future Enhancements
- Persist events in **localStorage** or connect to a real API
- Add user authentication for event hosting
- Support RSVP lists & attendee counts
- Infinite scroll or pagination for larger event lists
- Add animations with Framer Motion

## 🖤 License
MIT – free to use, modify, and share.