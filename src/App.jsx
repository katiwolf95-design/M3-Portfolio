import './App.css'
import AboutMe from './components/AboutMe.jsx'
import Hero from './components/sections/Hero.jsx'
import BrandColors from './components/ui/BrandColors.jsx'
import HorizontalTimeline from './components/sections/HorizontalTimeline.jsx'
import VerticalTimeline from './components/sections/VerticalTimeline.jsx'

function App() {

  return (

    <main>
      <Hero />
      
      <BrandColors />
      
      <VerticalTimeline />
      <HorizontalTimeline />

      <AboutMe />

      {/* <Projects /> */}
      {/* <Footer /> */}
    </main>
  )
}

export default App
