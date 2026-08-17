# ຖ້າມື້ນັ້ນເຮົາເລືອກອີກທາງ
### An Interactive Love Story

A branching, cinematic visual-novel built with React + Vite + Tailwind. No
external photos or audio are required — the atmosphere (rain, grain,
vignette, a "breathing" presence glow standing in for the other character)
is built entirely from CSS, so the story fully works out of the box.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
```

## Project structure

```
src/
├── data/
│   ├── story.js      # the full branching scene graph (37 scenes, 5 acts)
│   ├── scenes.js      # mood → visual/music config, track & sfx paths
│   └── endings.js     # metadata for the 4 ending tags a playthrough can end on
├── context/
│   └── StoryContext.jsx  # current scene, choice history, save/continue, routing
├── hooks/
│   ├── useStory.js    # thin context accessor
│   └── useMusic.js    # crossfading background music + one-shot sfx, mute persisted
├── components/        # SceneBackground, Character, Dialogue, ChoiceButton,
│                       # ProgressBar, MusicPlayer, FadeTransition, StoryScreen
└── pages/              # Home, Story, Ending
```

## Story structure

- 5 acts, ~37 scenes, converging branch design (many early choices funnel
  into shared later beats — same technique real visual novels use to keep
  branch count manageable while still feeling reactive).
- 4 distinct endings tags (`quiet`, `unspoken`, `spoken`, `embrace`) depending
  on the player's last choices, shown on the ending screen to encourage replay.
- Progress is auto-saved to `localStorage` after every choice; Home shows
  "ສືບຕໍ່" (continue) whenever a save exists.

## Adding real media (optional)

Drop matching files into these folders and they'll be picked up automatically
— nothing else to wire up. Missing files just fail silently.

- `public/music/`: `main-theme.mp3`, `nostalgic.mp3`, `tension.mp3`, `hope.mp3`, `ending.mp3`
- `public/sounds/`: `message.mp3`, `phone-ring.mp3`, `click.mp3`, `rain.mp3`
- `public/images/`: not currently used by any component — the design intentionally
  uses CSS-only atmosphere instead of photos, but you can wire a `Character.jsx`
  image swap in if you'd rather use real character art.

## Tech stack

React 19 · Vite 8 · Tailwind CSS 4 · plain CSS animations · `localStorage` for
save/continue. No backend, no router — screen transitions are handled by a
small state machine in `StoryContext`.
