import React, { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Register from '../Register/Register'
import HomePage from './HomePage'
import Footer from '../Footer/Footer'
const PostLoader = () => {

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
            
        <Route path='/register' element={<Register />}/>
          
    </Routes>
    <Footer />
    </Router>
  )
}

export default PostLoader
