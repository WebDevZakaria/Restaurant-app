import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import '../slider.css'


function ReviewCarousel() {
  return (
    <Carousel showThumbs = {false} showStatus = {false} showIndicators = {true} className = 'my-9 w-full max-w-[1024px] items-center justify-center' autoPlay = {true} infiniteLoop = {true} >


    {slider.map((item,index)=>{

      const {image,message,name,occupation} = item


      return <div className='max-w-[840px] mx-auto px-4 py-10 text-white' key={index}>
        <div className='text-lg mb-9 lg:text-2xl leading-snug'>{message}</div>
        <div className='max-w-[70px] lg:max-w-[100px] mx-auto mb-3'>
          <img src={image} alt = ''/>
        </div>
        <div className='font-bold text-[22px] text-accent'>{name}</div>
        <div className='font-medium italic'>{occupation}</div>
        


      </div>

    })}
    
    </Carousel>
  )
}

export default ReviewCarousel
