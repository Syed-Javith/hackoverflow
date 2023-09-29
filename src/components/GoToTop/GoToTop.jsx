import React, { useState } from 'react'
import './GoToTop.css'
import { FaAngleUp } from 'react-icons/fa';
const GoToTop = () => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <button className='to-top' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}><FaAngleUp />
     </button>
  )
}

export default GoToTop
