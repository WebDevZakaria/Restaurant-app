import React from 'react';

import { socialData } from '../data'

const Socials = () => {
  return <div className='flex gap-x-[10px] '>

    {socialData.map((item,index)=>{

      return <a className=' hover:text-accent  rounded-full w-[25px] left-0 flex items-center justify-center text-sm '  href={item.href} key = {index}>{item.icon}</a>

    })}


  </div>;
};

export default Socials;
