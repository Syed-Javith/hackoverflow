import {FaDiscord, FaInstagram, FaRegEnvelope} from 'react-icons/fa'
import React from 'react'

const MediaLinks = () => {
  return (
    <>
    <a href=""><p className='register'>Register for event here</p></a>
    <div className='media'>
      <a href='www.google.com'><FaRegEnvelope/></a>
      <a href='www.google.com'><FaInstagram /></a>
      <a href='www.google.com'><FaDiscord /></a>
    </div>
    </>
  )
}

export default MediaLinks
