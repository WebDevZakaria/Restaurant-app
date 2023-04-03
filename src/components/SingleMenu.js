import React from 'react'
import Homes from './Homes'
import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '../variants';
import image from '../assets/img/menu/2.png'


function SingleMenu() {
  return (
    <>

<Homes />

<section className=' min-h-[820px] bg-testimonial mt-8 ' >

<div className='relative text-center  h1 top-24'> Food Description  </div>
    <div className='container mx-auto min-h-[620px]'>
    
      <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.6 }} className=' min-h-[620px] flex flex-col lg:flex-row lg:space-x-1 items-center'>
       
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1.8)} className='flex-1 text-left'>
          <div className='pretitle text-center'>

          </div>
          <h2 className='text-[50px] capitalize text-left mb-8 text-red-500'>Burger</h2>
          <p className='mb-8'>italiant burger </p>
          <p className='mb-20'>sdvsdvsdlkvsdjvklsdjvksdlvjsdklvjsdklvjsdklvjsdklvsdjvlksdjvsdklvjsdklvjsdklv
          sdvsdvsdlkvsdjvklsdjvksdlvjsdklvjsdklvjsdklvjsdklvsdjvlksdjvsdklvjsdklvjsdklvsdv
          sdvsdvsdlkvsdjvklsdjvksdlvjsdklvjsdklvjsdklvjsdklvsdjvlksdjvsdklvjsdklvjsdklvsdvsdv
          vsvsdv
          sdvsdv
           </p>

          <button className='btn btn bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black  capitalize mx-auto lg:mx-1 text-left'>Add To card</button>

        </motion.div>

        <motion.div variants={plateVariants} className='-mb-[300px] -mr-[186px] z-10  '>
          <img src={image} alt='' className='rounded-full' />
        </motion.div>
        <div></div>
        <div></div>
      </motion.div>
    </div>

  </section>


    </>
  )
}

export default SingleMenu
