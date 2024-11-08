import React from 'react'
import Hero from './component/Hero'
import NavBar from './component/NavBar'

const App = () => {
  return (
    <div className=' overflow-y-hidden text-neutral-200 antialiased'>
      <Hero/>
      <NavBar/>
    </div>
  )
}

export default App
