import { useEffect, useState } from 'react'
import { useStory } from '../hooks/useStory'
import SceneBackground from './SceneBackground'
import Character from './Character'
import Dialogue from './Dialogue'
import ChoiceButton from './ChoiceButton'
import ProgressBar from './ProgressBar'
import FadeTransition from './FadeTransition'

export default function StoryScreen({ scene, music }) {
  const { choose, goHome } = useStory()
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    setLineIndex(0)

    if (scene.music) {
      music.playTrack(scene.music)
    }

    if (scene.sfx) {
      scene.sfx.forEach((key) => music.playSfx(key))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene.id])

  // =====================================================
  // IMAGE FOR EVERY SCENE
  // =====================================================

  const sceneImage =
    scene.background ||
    `/images/backgrounds/${scene.id}.jpg`

  // =====================================================
  // DIALOGUE
  // =====================================================

  const lines = scene.dialogue ?? []
  const line = lines[lineIndex]

  const isLastLine =
    lineIndex >= lines.length - 1

  const showChoices =
    isLastLine &&
    scene.choices?.length > 0

  const isContinueOnly =
    scene.choices?.length === 1 &&
    scene.choices[0].continue

  // =====================================================
  // NEXT DIALOGUE LINE
  // =====================================================

  const handleAdvance = () => {
    if (!isLastLine) {
      setLineIndex((i) => i + 1)

      music.playSfx('click')
    }
  }

  // =====================================================
  // CHOICE
  // =====================================================

  const handleChoose = (choice) => {
    music.playSfx('click')

    choose(choice)
  }

  return (
    <div className="relative flex-1 flex flex-col min-h-dvh overflow-hidden">

      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <SceneBackground
        mood={scene.mood}
        image={sceneImage}
      />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="relative z-40 flex items-center justify-between px-4 pt-4 sm:px-8">

        <button
          type="button"
          onClick={goHome}
          className="
            text-xs
            tracking-wide
            opacity-60
            hover:opacity-100
            transition-opacity
          "
          style={{
            color: 'var(--text-secondary)',
          }}
        >
          ← ໜ້າຫຼັກ
        </button>

        <ProgressBar
          act={scene.act}
        />

        <span
          className="w-16"
          aria-hidden="true"
        />

      </header>

      {/* =================================================
          CHARACTER
      ================================================= */}

      <div className="
        relative
        z-20
        flex-1
        flex
        items-center
        justify-center
      ">

        <Character
          mood={scene.mood}
          speaking={Boolean(line?.speaker)}
        />

      </div>

      {/* =================================================
          DIALOGUE + CHOICES
      ================================================= */}

      <FadeTransition
        transitionKey={scene.id}
        className="
          relative
          z-40
          px-4
          pb-8
          sm:px-8
        "
      >

        <div className="
          max-w-xl
          mx-auto
          w-full
        ">

          {/* Dialogue */}

          <Dialogue
            line={line}
            onAdvance={handleAdvance}
            showHint={!isLastLine}
          />

          {/* Choices */}

          {showChoices && (
            <div
              className={
                isContinueOnly
                  ? 'mt-2'
                  : 'mt-6 flex flex-col gap-3'
              }
            >

              {scene.choices.map((choice) => (

                <ChoiceButton
                  key={choice.id}
                  choice={choice}
                  onSelect={handleChoose}
                  variant={
                    choice.continue
                      ? 'continue'
                      : 'choice'
                  }
                />

              ))}

            </div>
          )}

        </div>

      </FadeTransition>

    </div>
  )
}