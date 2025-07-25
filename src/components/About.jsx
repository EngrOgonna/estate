import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:200}}
transition={{duration: 1}}
whileInView={{opacity: 1, x:0}}
viewport={{once: true}}
    
    
    className='container flex flex-col items-center justify-center w-full mx-auto overflow-hidden px-14 md:px-20 lg:px-32' id='About'>
      <h1 className='text-2xl sm:text-4xl font-boldmb-2'>About <span className='font-light underline underline-offset-4 decoration-1 under'>Our Brand</span></h1>
      <p className='mb-8 text-center text-gray-500 max-w-80'> Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col items-center md:flex-row md:items-start md:gap-20'>
      <img src={assets.project_img_3} alt="" className='w-full h-full max-w-lg sm:w-1/2'/>
      <div className='flex flex-col items-center mt-10 text-gray-600 md:items-start'>
    <div className='grid w-full grid-cols-2 gap-6 md:gap-10 2xl pr-28'>
      <div>
        <p className='text-4xl font-medium text-gray-800'>13+</p>
        <p>Years Of Excellence</p>
      </div>
      <div>
        <p className='text-4xl font-medium text-gray-800'>10+</p>
        <p>Projects Completed</p>
      </div>
      <div>
        <p className='text-4xl font-medium text-gray-800'>20+</p>
        <p>Mn. Sq. Ft. Delivered</p>
      </div>
      <div>
        <p className='text-4xl font-medium text-gray-800'>20+</p>
        <p>Ongoing Projects</p>
      </div>
    </div>
    <p className='max-w-lg my-10'>David Estate is a serene and secure residential community designed for comfort, convenience, and modern living. Nestled in a prime location, the estate offers a blend of peaceful surroundings and easy access to urban amenities, making it an ideal place for families, professionals, and investors alike.
With a strong emphasis on infrastructure and sustainability, David Estate features well-paved roads, reliable power supply, treated water systems, and 24/7 security surveillance. The layout is thoughtfully planned to include green spaces, recreational areas, and provisions for schools, shopping, and worship centers.

</p>
<button className='px-8 py-2 text-white bg-blue-600 rounded'>Learn More</button>
      </div>
      </div>
    </motion.div>
  )
}

export default About
