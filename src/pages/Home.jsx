import Hero from '../components/sections/Hero.jsx'
import Profile from '../components/profile/Profile.jsx'
import HorizontalTimeline from '../components/sections/HorizontalTimeline.jsx'
import VerticalTimeline from '../components/sections/VerticalTimeline.jsx'
import BrandColors from '../components/ui/BrandColors.jsx'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <>
        <Hero />
        <section id="about">
            <Profile />
        </section>
        <HorizontalTimeline />
        <VerticalTimeline />
        <BrandColors />
        <Footer />
    </>
  )
}

export default Home
