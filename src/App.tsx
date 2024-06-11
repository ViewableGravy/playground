import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { PreviewCard } from './components/tabs/previewCard'

const getPhoto = (resolution: { width: number, height: number }, seed: string, scale: number) => {
  return `https://picsum.photos/seed/${seed}/${resolution.width * scale}/${resolution.height * scale}`
}

function App() {
  /***** RENDER HELPERS *****/
  const getPreviewPhoto = getPhoto.bind(null, { width: 550, height: 300 })

  /***** RENDER *****/
  return (
    <>
      <PreviewCard width={550} height={300} className="App__Upcoming">
        <PreviewCard.Tab image={getPreviewPhoto("a", 1.1)} >
          New Contact Page
        </PreviewCard.Tab>
        <PreviewCard.Tab image={getPreviewPhoto("b", 1.1)}>
          About Me
        </PreviewCard.Tab>
        <PreviewCard.Tab image={getPreviewPhoto("c", 1.1)}>
          Blog Posts
        </PreviewCard.Tab>
        <PreviewCard.Tab image={getPreviewPhoto("d", 1.1)}>
          Some Other Event
        </PreviewCard.Tab>
        <PreviewCard.Tab image={getPreviewPhoto("e", 1.1)}>
          Unrelated Event
        </PreviewCard.Tab>
        <PreviewCard.Tab.Outlet />
      </PreviewCard>
    </>
  )
}

export default App
