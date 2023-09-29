import React from 'react'
import logo from '../../images/loader.gif'

const LogoLoader = () => {
  return (
    <img src={logo} alt="" style={
        {
            height : '100vh',
            width : '110vw'
        }
    }/>
  )
}

export default LogoLoader