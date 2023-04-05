import React from 'react'
import Homes from './Homes'
import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '../variants';
import image from '../assets/img/menu/2.png'
import Review from './Review';

import { Link } from 'react-router-dom';

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

          <Link to = '/addtocard'><button className='btn btn bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black  capitalize mx-auto lg:mx-1 text-left'>Add To card</button></Link>

        </motion.div>

        <motion.div variants={plateVariants} className='-mb-[100px] -mr-[186px] z-10  '>
          <img src={image} alt='' className='rounded-full' />
        </motion.div>
        <div></div>
        <div></div>
      </motion.div>
    </div>

  </section>

  <section className='min-h-[60px] mt-8'>

    <motion.div  variants={staggerContainer} initial='hidden' whileInView={'show'} className='container mx-auto' >
        <div className=''>
            <div className='h2 capitalize mb-8 text-center'>
                review Food 
            </div>
            <div   className=' relative lg:left-[440px]'>
            <motion.form variants={staggerContainer(0.3, 1)} initial = 'hidden' whileInView={'show'} className='flex flex-col right '>

            <motion.label for="gender" variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='mb-2' > Select you Rating Star</motion.label>
    <motion.select name="gender" variants={fadeIn('down','spring',0.3, 1.1,1000,400)} className=' input px-10 max-w-[310px] mb-8'>

	<option value='' selected> Select ...</option>

	<option value="1">1 - Poor</option>

	<option value="2">2 - Fair</option>

	<option value="3">3 - Good</option>

    <option value="4">4 - Very Good</option>

    <option value="5">5 - excelent</option>
    
    </motion.select>

                <motion.textarea variants={fadeIn('down','spring',0.4, 1.1,1000,400)} className='min-h-[200px] max-w-[520px] border-solid mb-8 placeholder:text-black text-black' rows="4" cols="50"  placeholder='Enter Your Reviews' />

                <motion.button  variants={fadeIn('down','spring',0.5, 1.1,1000,400)} className='input bg-slate-500 hover:bg-pink-300/20 max-w-[200px] text-center mx-1 px-2 ' >Submit</motion.button>

            </motion.form>

            </div>

        </div>

    </motion.div>

  </section>

  <Review />

    </>
  )
}

export default SingleMenu
