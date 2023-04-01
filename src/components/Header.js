import React,{useState, useEffect} from 'react';

import Nav from '../components/Nav'
import Socials from '../components/Socials'
import LogoWhite from '../assets/img/header/logo-white.png'
import { motion } from 'framer-motion';
import { staggerContainer,fadeIn } from '../variants';




const headerVariants = {
  hidden:{
    padding:'2px 0 8px 0',
    background:'none',
  },
  show:{
    padding:'24px 0 14px 0',

    background:'rgba(0,0,0.0.92)',
  
    transiton:{
      type:'spring'
    }
  }
}


export const navVariants = {
  hidden:{
    clipPath:'circle(5.8% at 50% 0)',
    opacity:0,
    transiton:{
      type:'spring',
      delay:'0.2',
      stiffness:300,
      damping:140
    }

  },
  show:{
    opacity:1 ,
     clipPath:'circle(180% at 50% 0)',
    transiton:{
      type:'spring',
      stiffness:80,    
    }
  }
}



const Header = () => {

  const [isActive,setIsActive] = useState(false)
  const [isHidden,setIsHidden] = useState(false)
  const [nav,setNav] = useState(false) 

  
  

  useEffect(()=>{

    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    })

    window.addEventListener('scroll',()=>{
      window.scrollY > 400 ? setIsHidden(true) : setIsHidden(false);
    })

  })

  return (
    <>
  <motion.header variants={headerVariants} initial = 'hidden'  animate = {isActive ? 'show' : ''}  className=' fixed w-full max-w-[1800px] z-50 py-4 top-0 flex sm:flex '>
<motion.div variants={staggerContainer(0.3,1)} initial = 'hidden' animate = {isHidden ? 'hidden' :'show'} className = 'flex sm:flex lg:flex'>
    <div className='container mx-auto items mt-7  '>
      <div className=' flex mx-5  left-2   px-4  lg:px-0 sm:px-0  relative py-2 text-white '>
        <div className='flex '>
        <Socials/>
        </div>
       <div className='block  ml-8    lg:flex lg:ml-96    capitalize font-primary italic '>
        <div className='bg-pink-200/20  mb-2 lg:p-2 rounded-xl hover:bg-white hover:text-black   mx-6 text-2xl'><a href='#'> Menu</a></div>
        
        <div className='bg-pink-200/20 mb-2  lg:p-2 rounded-xl hover:bg-white hover:text-black   mx-6 text-2xl'><a href='#'> Menu</a></div>
        <div className='bg-pink-200/20 mb-2 lg:p-2 rounded-xl hover:bg-white hover:text-black   mx-6  text-2xl'><a href='#'> Menu</a></div>
        <div className='bg-red-700/40 mb-2 lg:p-2 rounded-xl hover:bg-white hover:text-black   mx-6  text-2xl'><a href='#'> Register</a></div>
        </div>
        <motion.div  variants={navVariants} initial = 'hidden' animate = {nav ? 'show' : ''}  className='absolute bg-accent w-[310px] h-[50vh]   right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'>
          <Nav/>
        </motion.div>
      </div>
  
    </div>

    <motion.div variants={fadeIn('down','tween',1.2,1.4)}    className='absolute top-36 left-0  '>
   <a href='#'><img className={`${isActive ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'}`} src={LogoWhite} alt ='' /></a>
 </motion.div>

 </motion.div>

  </motion.header>;
  
 </>
 )
};

export default Header;
