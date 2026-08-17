import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { story, START_SCENE } from '../data/story'
import { DEFAULT_ENDING } from '../data/endings'

export const StoryContext = createContext(null)

const SAVE_KEY = 'ilm-save-v1'

function readSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.sceneId || !story[parsed.sceneId]) return null
    return parsed
  } catch {
    return null
  }
}

function writeSave(data) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data))
  } catch {
    // storage unavailable — the story still plays, it just won't resume later
  }
}

function clearSave() {
  try {
    localStorage.removeItem(SAVE_KEY)
  } catch {
    /* noop */
  }
}

export function StoryProvider({ children }) {
  const [screen, setScreen] = useState('home') // 'home' | 'story' | 'ending'
  const [sceneId, setSceneId] = useState(START_SCENE)
  const [history, setHistory] = useState([])
  const [hasSave, setHasSave] = useState(false)

  useEffect(() => {
    setHasSave(Boolean(readSave()))
  }, [])

  const scene = story[sceneId] ?? story[START_SCENE]

  const endingTag = useMemo(() => {
    for (let i = history.length - 1; i >= 0; i -= 1) {
      if (history[i].endingTag) return history[i].endingTag
    }
    return DEFAULT_ENDING
  }, [history])

  const goTo = useCallback(
    (nextId, choiceMeta) => {
      const nextHistory = choiceMeta ? [...history, choiceMeta] : history

      if (story[nextId]?.isEnding) {
        clearSave()
        setHasSave(false)
        setScreen('ending')
      } else {
        writeSave({ sceneId: nextId, history: nextHistory })
        setHasSave(true)
      }

      setHistory(nextHistory)
      setSceneId(nextId)
    },
    [history],
  )

  const choose = useCallback(
    (choice) => {
      goTo(choice.next, {
        scene: sceneId,
        choiceId: choice.id,
        endingTag: choice.endingTag,
      })
    },
    [goTo, sceneId],
  )

  const startNew = useCallback(() => {
    clearSave()
    setHasSave(false)
    setHistory([])
    setSceneId(START_SCENE)
    setScreen('story')
  }, [])

  const continueSaved = useCallback(() => {
    const save = readSave()
    if (!save) {
      startNew()
      return
    }
    setHistory(save.history ?? [])
    setSceneId(save.sceneId)
    setScreen('story')
  }, [startNew])

  const goHome = useCallback(() => {
    setScreen('home')
  }, [])

  const value = useMemo(
    () => ({
      screen,
      scene,
      sceneId,
      history,
      hasSave,
      endingTag,
      choose,
      startNew,
      continueSaved,
      goHome,
    }),
    [screen, scene, sceneId, history, hasSave, endingTag, choose, startNew, continueSaved, goHome],
  )

  return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
}
