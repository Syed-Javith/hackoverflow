import React, { useState } from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Sponsors from '../Sponsors/Sponsors'
import Organizer from '../Organizer/Organizer'
import Timeline from '../Timeline/Timeline'
import ProgressBar from '../Progress/Progress/ProgressBar'
import GoToTop from '../GoToTop/GoToTop'
import Footer from '../Footer/Footer/Footer'
import DomainNew from '../DomainNew/DomainNew'
import FAQ from '../FAQ/FAQ'

const PostLoader = () => {

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
      <DomainNew />
      <Timeline />
      <Sponsors />
      <Organizer />
      <FAQ />
      <Footer />
    </>
  )
}

export default PostLoader
