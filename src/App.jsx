import { StoryProvider } from './context/StoryContext'
import { useStory } from './hooks/useStory'
import { useMusic } from './hooks/useMusic'
import Home from './pages/Home'
import Story from './pages/Story'
import Ending from './pages/Ending'
import MusicPlayer from './components/MusicPlayer'

function Screens({ music }) {
  const { screen } = useStory()

  if (screen === 'story') return <Story music={music} />
  if (screen === 'ending') return <Ending music={music} />
  return <Home music={music} />
}

export default function App() {
  const music = useMusic()

  return (
    <StoryProvider>
      <div className="relative min-h-dvh flex flex-col">
        <Screens music={music} />
        <MusicPlayer muted={music.muted} onToggle={music.toggleMute} />
      </div>
    </StoryProvider>
  )
}
