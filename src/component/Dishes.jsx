import React from 'react'
import {DISHES} from '../constants'
import DishCard from './DishCard'

const Dishes = () => {
  return (
   <section className=' container mx-auto py-16'>
    <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>Our Dishes</h2>
    <div className=' grid lg:grid-cols-5 grid-cols-1 gap-7'>
      {DISHES.map((project, index)=>(
        <DishCard key={index} project={project}/>
      ))}
    </div>
   </section>
  )
}

export default Dishes
