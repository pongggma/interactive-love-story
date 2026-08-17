import { useEffect, useState } from 'react'
import { useStory } from '../hooks/useStory'
import { ENDINGS } from '../data/endings'
import SceneBackground from '../components/SceneBackground'
import ChoiceButton from '../components/ChoiceButton'

const LINE_DELAY = 2400

export default function Ending({ music }) {
  const { scene, endingTag, startNew, goHome } = useStory()
  const [lineIndex, setLineIndex] = useState(0)
  const [done, setDone] = useState(false)
  const lines = scene.dialogue ?? []

  useEffect(() => {
    if (scene.music) music.playTrack(scene.music)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (done) return
    const isLast = lineIndex >= lines.length - 1
    const timer = setTimeout(() => {
      if (isLast) setDone(true)
      else setLineIndex((i) => i + 1)
    }, LINE_DELAY)
    return () => clearTimeout(timer)
  }, [lineIndex, lines.length, done])

  const ending = ENDINGS[endingTag]
  const line = lines[lineIndex]

  return (
    <div className="relative flex-1 flex flex-col min-h-dvh items-center justify-center px-6 text-center">
      <SceneBackground mood={scene.mood} />

      <div className="relative z-10 max-w-lg w-full">
        {!done ? (
          <p
            key={lineIndex}
            className="dialogue-line-enter italic"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '1.4rem',
              lineHeight: 1.85,
              color: 'var(--text)',
            }}
          >
            {line?.text}
          </p>
        ) : (
          <div className="dialogue-line-enter flex flex-col items-center gap-8">
            <div>
              <div
                className="text-xs tracking-[0.25em] uppercase mb-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                — END —
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', color: 'var(--accent)' }}>
                {ending?.title}
              </h2>
              <p
                className="mt-3 text-sm mx-auto"
                style={{ color: 'var(--text-secondary)', maxWidth: '28rem', lineHeight: 1.7 }}
              >
                {ending?.description}
              </p>
            </div>

            <div className="flex gap-3 w-full max-w-xs">
              <ChoiceButton choice={{ text: 'ຫຼິ້ນອີກຄັ້ງ' }} onSelect={startNew} />
              <ChoiceButton choice={{ text: 'ໜ້າຫຼັກ' }} onSelect={goHome} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
