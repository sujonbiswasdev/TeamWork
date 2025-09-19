import React from 'react'
import { CardData2 } from '../../../public/data/Switch'

const Card2 = () => {
  return (
    <div className='bg-[#262626] lg:w-[80%] md:w-[85%] w-[90%] mx-auto py-20'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-10 '>
             {CardData2.map((item,index)=>(
               <div key={index}>
                  <img src={item.Image} alt="" />
                  <h2 className='font-semibold py-4 lg:text-[30px] md:text-[24px] text-[20px] '>{item.title}</h2>
                  <p className='lg:text-[18px] md:text-base text-sm text-[#EDEDED]'>{item.des}</p>   
               </div>
             ))}
          </div>
        </div>
  )
}

export default Card2

