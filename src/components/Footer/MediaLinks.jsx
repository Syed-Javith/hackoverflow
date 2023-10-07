import {FaDiscord, FaInstagram, FaRegEnvelope} from 'react-icons/fa'
import React from 'react'

const MediaLinks = () => {
  return (
    <>
    <p className='register'>Register for event here</p>
    <div className='media'>
      <a><FaRegEnvelope/></a>
      <a><FaInstagram /></a>
      <a><FaDiscord /></a>
    </div>
    </>
  )
}

export default MediaLinks
