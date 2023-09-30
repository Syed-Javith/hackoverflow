import {FaDiscord, FaInstagram, FaRegEnvelope} from 'react-icons/fa'
import React from 'react'

const MediaLinks = () => {
  return (
    <>
    <div className='media'>
      <a><FaRegEnvelope/></a>
      <a><FaInstagram /></a>
      <a><FaDiscord /></a>
    </div>
    </>
  )
}

export default MediaLinks
