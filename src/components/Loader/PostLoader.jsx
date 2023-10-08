import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Footer from '../Footer/Footer'
import ParticleBackground from '../Particles/ParticlesBackground'
import HomePage from './HomePage'
import Register from '../Register/Register'
import TeamsPage from '../TeamsPage/TeamsPage'

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
