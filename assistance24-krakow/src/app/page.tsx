import Footer from '@/components/Footer'
import TopBar from '@/components/Topbar'
import AboutUs from '@/sections/AboutUs'
import Contact from '@/sections/Contact'
import HeroSection from '@/sections/HeroSection'
import OurServices from '@/sections/OurServices'
import React from 'react'


type Props = {}

const Home: React.FC = (props: Props) => {
  return (
   <div className='box-border w-full h-full overflow-x-hidden scroll-smooth bg-primary-bg'>
    <TopBar />
    <HeroSection />
    <AboutUs />
    <OurServices />
    <Contact />
    <Footer /> 
   </div>
  )
}

export default Home