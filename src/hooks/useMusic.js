import { useCallback, useEffect, useRef, useState } from 'react'
import { SFX, TRACKS } from '../data/scenes'

const MUTE_KEY = 'ilm-muted-v1'

// Fades the current <audio> track out, swaps src, fades in. Missing files
// (this project ships without audio) fail silently — the story still plays.
export function useMusic() {
  const audioRef = useRef(null)
  const fadeRef = useRef(null)
  const currentTrackKey = useRef(null)
  const [muted, setMuted] = useState(() => {
    try {
      return localStorage.getItem(MUTE_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio
    return () => {
      audio.pause()
      if (fadeRef.current) clearInterval(fadeRef.current)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(MUTE_KEY, muted ? '1' : '0')
    } catch {
      /* noop */
    }
    if (audioRef.current) audioRef.current.muted = muted
  }, [muted])

  const playTrack = useCallback((trackKey) => {
    const audio = audioRef.current
    const track = TRACKS[trackKey]
    if (!audio || !track) return
    if (currentTrackKey.current === trackKey && !audio.paused) return
    currentTrackKey.current = trackKey

    if (fadeRef.current) clearInterval(fadeRef.current)

    const targetVolume = track.volume ?? 0.35
    const fadeOutStep = 0.05

    const swapAndFadeIn = () => {
      audio.src = track.src
      audio.currentTime = 0
      audio.volume = 0
      audio.play().catch(() => {
        /* browser blocked autoplay, or file missing — silently ignore */
      })
      fadeRef.current = setInterval(() => {
        const next = Math.min(audio.volume + fadeOutStep, targetVolume)
        audio.volume = next
        if (next >= targetVolume) clearInterval(fadeRef.current)
      }, 80)
    }

    if (audio.paused || audio.volume === 0) {
      swapAndFadeIn()
      return
    }

    fadeRef.current = setInterval(() => {
      const next = Math.max(audio.volume - fadeOutStep, 0)
      audio.volume = next
      if (next <= 0) {
        clearInterval(fadeRef.current)
        swapAndFadeIn()
      }
    }, 60)
  }, [])

  const playSfx = useCallback(
    (key) => {
      if (muted) return
      const src = SFX[key]
      if (!src) return
      const sfx = new Audio(src)
      sfx.volume = 0.4
      sfx.play().catch(() => {
        /* file missing or blocked — ignore */
      })
    },
    [muted],
  )

  const toggleMute = useCallback(() => setMuted((m) => !m), [])

  return { playTrack, playSfx, muted, toggleMute }
}
