import React from 'react'
import './Footer.css'
import MediaLinks from './MediaLinks'
import Logo from '../../images/logo_sym.png'
import QuickLinks from './QuickLinks'
import College from './College'

function Footer(){
  return (
    <footer>
      <div className='row' style={{margin:"1em",marginBottom:"1.75em",justifyContent:"center"}}>
        <div className="col-lg-3">
          <img src={Logo} height={200} width={200}/>
        </div>
        <div className="col-lg-3">
            <div className="row">
              <QuickLinks />
              <div className="col"></div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="row">
              <College />
              <div className="col"></div>
            </div>
        </div> 
        <div className="col-lg-3">
          <h3 style={{marginBottom:"0.5em"}}>Contact Us</h3>
            <ul style={{lineHeight:"2"}}>
              <li><a href='tel:9876543210'>Mustafa - 9876543210 </a></li>
              <li><a href='tel:9876543210'>Subhash - 9876543210 </a></li>
              <li><a href='tel:9876543210'>Surya Prakash - 9876543210 </a></li>
            </ul>
            
        </div>
      </div>
      <MediaLinks />
      <p className='cpr'>Copyright © 2023 All rights reserved by Rajalakshmi Engineering College</p>
    </footer>
  )
}

export default Footer
