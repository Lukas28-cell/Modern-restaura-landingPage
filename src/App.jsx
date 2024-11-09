import React from 'react'
import Hero from './component/Hero'
import NavBar from './component/NavBar'
import Dishes from './component/Dishes'
import About from './component/About'
import Mission from './component/Mission'
import Expertise from './component/Expertise'
import Review from './component/Review'

const App = () => {
  return (
    <div className=' overflow-y-hidden text-black antialiased'>
      <Hero/>
      <NavBar/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
    </div>
  )
}

export default App
