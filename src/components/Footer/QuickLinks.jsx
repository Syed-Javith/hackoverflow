import React from 'react'
import { Link } from 'react-router-dom'
const QuickLinks = () => {
  return (
      <div id='quick-links' className='col'>
        <h3>Quick Links</h3>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Domains</a></li>
                <li><a href="">Sponsors</a></li>
                <li><a href="">Organisers</a></li>
            </ul>
            
        </div>
  )
}

export default QuickLinks
