import React from 'react'
import {REVIEW} from '../constants'
import xaviour from '../assets/xaviour.jpeg'
import customer1 from '../assets/customer1.jpeg'
import customer2 from '../assets/customer2.jpeg'
import customer3 from '../assets/customer3.jpeg'
import customer4 from '../assets/customer4.jpeg'

const Review = () => {
  return (
   <section className=' container mx-auto mb-8 mt-12' id='review'>
    <div className=' flex flex-col'>
        <p className='mb-10 text-3xl font-light leading-normal
        lg:mx-40 tracking-tighter lg:text-[3.5rem]'>
            {REVIEW.content}
        </p>
        <div className=' flex items-center justify-center gap-6'>
            <img src={xaviour} width={80} height={80} alt={REVIEW.name} 
            className=' rounded-full border' />
        </div>
    </div>
   </section>
  )
}

export default Review
