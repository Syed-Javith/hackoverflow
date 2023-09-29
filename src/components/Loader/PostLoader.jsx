import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Domain from '../Domain/Domain'
import Sponsors from '../Sponsors/Sponsors'
import Organizer from '../Organizer/Organizer'
import Footer from '../Footer/Footer'
import ProgressBar from '../Progress/ProgressBar'
import GoToTop from '../GoToTop/GoToTop'

const PostLoader = () => {

  const [scroll , setScroll ] = useState(0);

  window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  setScroll(scrolled);
  };


  return (
    <>
     <ProgressBar scroll={scroll} />
     <GoToTop />
      <Home />
      <About />
      <Domain />
      <Sponsors />
      <Organizer />
      <Footer />
    </>
  )
}

export default PostLoader
