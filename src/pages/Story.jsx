import { useStory } from '../hooks/useStory'
import StoryScreen from '../components/StoryScreen'

export default function Story({ music }) {
  const { scene } = useStory()
  return <StoryScreen scene={scene} music={music} />
}
