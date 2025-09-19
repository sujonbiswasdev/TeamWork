import React from 'react'
import { CardData3 } from '../../../public/data/Switch'

const Card3 = () => {
  return (
    <div className='bg-[#262626] lg:w-[80%] md:w-[85%] w-[90%] mx-auto py-20'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
        {CardData3.map((item,index)=>(
          <div className='bg-[#262626] px-4 py-2 space-y-4' key={index}>
            <h2 className='font-semibold py-4 lg:text-[30px] md:text-[24px] text-[20px] text-[#D8FF99]'>{item.title}</h2>
            <p>{item.des}</p>

            <div className='flex justify-between bg-gray-800 items-center px-6 py-2'>
              <div className='flex gap-6 items-center'>
              <img src={item.Image} alt="" />
              <div className='space-y-1'>
                <h3 className='text-sm'>{item.title1}</h3>
                <p className='text-sm text-gray-400'>{item.des1}</p>
              </div>
            </div>
            <div>
              <button className='px-6 py-3 rounded-xl bg-[#262626]'>{item.mybtn}</button>
            </div>
            </div>

            

            

          </div>
        ))}

      </div>
      
    </div>
  )
}

export default Card3