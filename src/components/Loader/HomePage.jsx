import React, { useState } from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Domain from '../Domain/Domain'
import Sponsors from '../Sponsors/Sponsors'
import Organizer from '../Organizer/Organizer'
import Timeline from '../Timeline/Timeline'
import ProgressBar from '../Progress/ProgressBar'
import GoToTop from '../GoToTop/GoToTop'

const HomePage = () => {
    const [scroll , setScroll ] = useState(0)
  
  window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var scrolled = (winScroll / height) * 100
    setScroll(scrolled)
  } 

  return (
    <>
            <ProgressBar scroll={scroll} />
            <GoToTop />
            <Home />
            <About />
            <Domain />
            <Timeline />
            <Sponsors />
            <Organizer />
            {/* <Footer /> */}
    </>
  )
}

export default HomePage
