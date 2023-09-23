import React from 'react'
import './Footer.css'
import MediaLinks from './MediaLinks'
import { FaPhoneAlt } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div className='row'>
        <div className="col-lg-4">

        </div>
        <div className="col-lg-4">

        </div>
        <div className="col-lg-4">
            <div id='contact-us'>
                <h1>Contact Us </h1>
                <a href='tel:9876543210'> <p><FaPhoneAlt /> +91 9876543210</p></a>
                <a href='tel:9876543210'><p> <FaPhoneAlt /> +91 9876543210</p></a>
                <a href='tel:9876543210'> <p><FaPhoneAlt /> +91 9876543210</p></a>
            </div>
        </div>
      </div>
      <MediaLinks />
      <p className='cpr'>copyrights owned by rec</p>
    </footer>
  )
}

export default Footer
