import React from 'react'


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom';

//import { menuData } from '../data';

import '../slider.css'

function MenusCarousel({menuItems}) {

    return <Carousel showThumbs = {false} showStatus = {false}  className = 'my-1 w-full max-w-[1024px] items-center justify-center' autoPlay = {true} infiniteLoop = {true} >

    {menuItems.map((item,index)=>{

      const {image,name ,price,description} = item
      
      return <div className=' border bg-pink-300/20  max-w-[340px] mx-auto px-1 py-10 text-white' key={index}>
        <div className='max-w-[80px] lg:max-w-[200px] mx-auto mb-3'>
          <img src={image} alt = ''/>
        </div>
        <div className='font-bold text-[22px] text-accent'>{name}</div>
        <div className=' font-medium italic'> {description}</div>
        <div className='font-medium italic text-blue-300'> {price}</div>
        
        <div className='px-20 py-4'>
        <Link to = '/singleorder'><button className='btn bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black hover:text-[15px] '> order now</button></Link>
        </div>
      </div>
    })}


    </Carousel>;

}

export default MenusCarousel
