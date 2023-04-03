import React from 'react'
import MenusCarousel from './MenusCarousel'
import { menuData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';




function MenusContent() {

    const { menuItems } = menuData

  return (

    <section className='bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[0px] z-10 h-[1000px] pt-[10px] md:pt-[120px]'>
    <div className='container mx-auto '>
      <motion.div variants={fadeIn('up','tween',0.2,1.6)} initial='hidden' whileInView={'show'}  className='text-center capitalize flex flex-col  items-center'>
        <h2 className=' h2 text-white'> Our Menu </h2>
        <p className='text-white/70 capitalize mb-4'>All Our Menu </p>
       
      </motion.div>
      <motion.div variants={fadeIn('up','tween',0.4,1.6)} initial='hidden' whileInView={'show'} className='flex justify-center items-center'>

        <MenusCarousel menuItems = {menuItems}/>

      </motion.div>
      
    </div>
    
  </section>
  )
}

export default MenusContent
