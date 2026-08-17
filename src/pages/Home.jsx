import { useEffect, useState } from 'react'
import { useStory } from '../hooks/useStory'
import SceneBackground from '../components/SceneBackground'
import ChoiceButton from '../components/ChoiceButton'

export default function Home({ music }) {
  const { hasSave, startNew, continueSaved } = useStory()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    music.playTrack('mainTheme')
    const t = setTimeout(() => setReady(true), 150)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative flex-1 flex flex-col min-h-dvh items-center justify-center px-6 text-center">
      <SceneBackground mood="rain" />

      <div
        className="relative z-10 max-w-sm w-full transition-opacity duration-[1400ms]"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <div className="text-3xl mb-4" aria-hidden="true">🌧️</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', lineHeight: 1.45, color: 'var(--text)' }}>
          ຖ້າມື້ນັ້ນ
          <br />
          ເຮົາເລືອກອີກທາງ
        </h1>
        <p
          className="mt-3 text-sm tracking-[0.15em] uppercase"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-accent)' }}
        >
          An Interactive Story
        </p>

        <div className="mt-10 flex flex-col gap-3">
          <ChoiceButton
            choice={{ text: hasSave ? '▶ ເລີ່ມໃໝ່' : '▶ ເລີ່ມເລື່ອງ' }}
            onSelect={startNew}
          />
          {hasSave && <ChoiceButton choice={{ text: '↻ ສືບຕໍ່ເລື່ອງ' }} onSelect={continueSaved} />}
        </div>

        <p className="mt-10 text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
         What If
        </p>
      </div>
    </div>
  )
}
