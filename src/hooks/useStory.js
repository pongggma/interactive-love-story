import { useContext } from 'react'
import { StoryContext } from '../context/StoryContext'

export function useStory() {
  const ctx = useContext(StoryContext)
  if (!ctx) {
    throw new Error('useStory must be used within a StoryProvider')
  }
  return ctx
}
