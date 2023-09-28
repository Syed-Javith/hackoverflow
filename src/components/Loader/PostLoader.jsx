import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Domain from '../Domain/Domain'
import Sponsors from '../Sponsors/Sponsors'
import Organizer from '../Organizer/Organizer'
import Footer from '../Footer/Footer'
import Timeline from '../Timeline/Timeline'

const PostLoader = () => {
  return (
    <>
      <Home />
      <About />
      <Domain />
      <Timeline />
      <Sponsors />
      <Organizer />
      <Footer />
    </>
  )
}

export default PostLoader
