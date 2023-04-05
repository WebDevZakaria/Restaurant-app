import React from 'react';

import { heroData } from '../data';
import { motion } from 'framer-motion';


import Header from './Header'
import About from './About';
import Menu from './Menu';


import { fadeIn,staggerContainer } from '../variants';
import Team from './Team';
import Testimonial from './Testimonial';
import Reservation from './Reservation';
import Footer from './Footer';


const Hero = () => {

  const {pretitle , title,subtitle,btnText  } = heroData

  return (
<>
    <section className='main-h-[980px] bg-hero bg-cover bg-right'>
      
      <Header/>
      
    <div className='container mx-auto min-h-[680px] flex justify-center items-center mt-1'>

<motion.div variants={staggerContainer(0.3, 1)} initial = 'hidden' whileInView={'show'}  className='text-center flex flex-col items-center rounded-lg py-3'>
      <motion.div variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='text-white text-[24px] lg:text-[28]  font-primary italic lg:font-medium mb-1'>{pretitle}</motion.div>
      <motion.div variants={fadeIn('down','spring',0.3, 1.1,1000,400)} className='h1 mb-5 text-black'>{title}</motion.div>
      <motion.div variants={fadeIn('down','spring',0.4, 1.1,1000,400)}  className='text-white max-w-[540px] mb-8'>{subtitle}</motion.div>
      <motion.div variants={fadeIn('down','spring',0.5, 2.1,1000,400)}>

<button className='btn bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black hover:text-lg '>{btnText}</button>
  </motion.div>  
      </motion.div> 
      </div>;
  

    </section>

    <About/>
    <Menu/>
    <Team />
    <Testimonial/>
    <Reservation/>
    

    </>
  )
};

export default Hero;
