import React from 'react'
import { motion } from 'framer-motion';
import Header from './Header'
import { fadeIn,staggerContainer } from '../variants';
import About from './About';


function Register() {

  return (
    <>
    <section className='main-h-[980px] bg-register bg-cover bg-right'>

      <Header/>

    <div className='container mx-auto min-h-[880px] flex justify-center items-center mt-0'>

<motion.div variants={staggerContainer(0.3, 1)} initial = 'hidden' whileInView={'show'}  className='text-center flex flex-col items-center rounded-lg py-1 bg-pink-300/40 min-h-[680px] min-w-[680px] '>

    <motion.div variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='text-white text-[24px] lg:text-[28]  font-primary italic lg:font-medium mb-1'>
        <h2 className='my-4 mb-6'>Create Account</h2>
      </motion.div>

      <motion.div variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='text-white text-[24px] lg:text-[28]  font-primary italic lg:font-medium mb-1'>
        <label className='text-black mx-4'>Name</label>
        <input type='text' placeholder='Enter Your Name' className='input my-4 mb-6 text-gray-500'/>
      </motion.div>

      <motion.div variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='text-white text-[24px] lg:text-[28]  font-primary italic lg:font-medium mb-1'>
      <label className='text-black mx-4'>Email</label>
        <input type='email' placeholder='Enter your Email'  className='input my-4 mb-6 text-gray-500' />
      </motion.div>

      <motion.div variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='text-white text-[24px] lg:text-[28]  font-primary italic lg:font-medium mb-1 relative '>
      <label className='text-black mx-4'>password</label>
        <input type='password' placeholder='Enter your Passowrd'  className='input my-4 mb-6 text-gray-500' />
      </motion.div>

      <motion.div variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='text-white text-[24px] lg:text-[28]  font-primary italic lg:font-medium mb-1 mx-0'>
      <label className='text-black mx-4'>confirmpassword</label>

        <input type='password' placeholder='Confirm Passowrd' className='input my-4 mb-10 text-gray-500' />
      </motion.div>
      
      <motion.div variants={fadeIn('down','spring',0.5, 2.1,1000,400)}>
<button className='btn bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black hover:text-lg w-60 '>Register</button>
  </motion.div>  
      </motion.div> 
      </div>;

    </section>
    <About/>
    

    </>


  )
}

export default Register
