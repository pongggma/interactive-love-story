import { MOODS } from '../data/scenes'

// No character art ships with this project — presence is suggested instead
// of shown: a slow "breathing" glow that shifts color with the scene's mood
// and brightens while the other person is speaking. See index.css for the
// underlying keyframes.
export default function Character({ mood, speaking }) {
  const config = MOODS[mood] ?? MOODS.rain

  return (
    <div className="flex items-center justify-center h-full pointer-events-none select-none">
      <div
        className="presence-glow"
        style={{
          background: `radial-gradient(circle, ${config.glow}bb 0%, ${config.glow}22 55%, transparent 75%)`,
          opacity: speaking ? 1 : 0.5,
          transform: speaking ? 'scale(1.08)' : 'scale(0.95)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      />
    </div>
  )
}
