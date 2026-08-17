import { useMemo } from 'react'
import { MOODS } from '../data/scenes'

function RainParticles() {
  const drops = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        duration: `${0.7 + Math.random() * 0.9}s`,
        delay: `${Math.random() * 2}s`,
        key: i,
      })),
    []
  )

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {drops.map((d) => (
        <span
          key={d.key}
          className="rain-drop"
          style={{
            left: d.left,
            animationDuration: d.duration,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  )
}

function DustParticles() {
  const motes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 4}px`,
        duration: `${5 + Math.random() * 5}s`,
        delay: `${Math.random() * 4}s`,
        key: i,
      })),
    []
  )

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {motes.map((d) => (
        <span
          key={d.key}
          className="dust-mote"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDuration: d.duration,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function SceneBackground({ mood, image }) {
  const config = MOODS[mood] ?? MOODS.rain

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">

      {/* IMAGE */}
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 z-0 w-full h-full object-cover"
          onLoad={() => {
            console.log('✅ IMAGE LOADED:', image)
          }}
          onError={() => {
            console.error('❌ IMAGE FAILED:', image)
          }}
        />
      )}

      {/* DARK / COLOR OVERLAY */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: config.gradient,
          opacity: 0.35,
          transition: 'background 1.2s ease',
        }}
      />

      {/* GLOW */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse 60% 45% at 50% 30%,
            ${config.glow}33,
            transparent 70%
          )`,
          opacity: 0.4,
        }}
      />

      {/* RAIN */}
      {config.particles === 'rain' && <RainParticles />}

      {/* DUST */}
      {config.particles === 'dust' && <DustParticles />}

      {/* FILM GRAIN */}
      <div className="film-grain absolute inset-0 z-30 pointer-events-none" />

      {/* VIGNETTE */}
      <div className="vignette absolute inset-0 z-30 pointer-events-none" />

    </div>
  )
}