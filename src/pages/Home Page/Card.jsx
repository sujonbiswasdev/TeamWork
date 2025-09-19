import React from 'react'
import { CardData } from '../../../public/data/Switch'

const Card = () => {
  return (
    <div className='bg-[#262626] lg:w-[80%] md:w-[85%] w-[90%] mx-auto py-20'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 '>
         {CardData.map((item,index)=>(
           <div key={index}>
              <img src={item.Image} alt="" />
              <h2 className='font-semibold py-4 lg:text-[30px] md:text-[24px] text-[20px] '>{item.title}</h2>
              <p className='lg:text-[18px] md:text-base text-sm text-[#EDEDED]'>{item.des}</p>

              <div className='mt-10 bg-gray-500/15 flex items-center justify-center'>
                <button className='text-[#FFFFFF] rounded-3xl px-6 py-3 '>{item.mybtn}</button>
              </div>    
           </div>
         ))}
      </div>
    </div>
  )
}

export default Card
