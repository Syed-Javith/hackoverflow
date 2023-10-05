import React, { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Register from '../Register/Register'
import HomePage from './HomePage'
import Footer from '../Footer/Footer'
import TeamsPage from '../TeamsPage/TeamsPage'
import ParticleBackground from '../Particles/ParticlesBackground'
const PostLoader = () => {

  

  return (
    <Router>
       <ParticleBackground/>
      <Routes>
        <Route path='/' element={<HomePage />} />
            
        <Route path='/register' element={<Register />}/>

        <Route path='/teams' element={<TeamsPage/>}/>
          
    </Routes>
    <Footer/>
    </Router>
  )
}

export default PostLoader
