import React from 'react'
import { CardData } from '../../../public/data/data'

const Cardpage = () => {
  return (
    <section className='xl:w-[80%]  md:w-[85%] w-[90%] mx-auto py-14'>
         <div>
            <h4 className='xl:text-[48px]  md:text-[38px] text-[28px] font-semibold mb-2.5 '>Current Openings</h4>
            <p className='xl:text-lg md:text-base text-sm text-[#E6E6E6]'>We have had We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.</p>
         </div>

         <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-9  '>
         {CardData.map((item,index)=>(
           <div key={index} className=' '> 
             
              <div>
                <h4 className='text-[#98989A]  font-semibold xl:text-[28px] md:text-[22px] test-xl lg:my-14 my-8 min-h-[40px] w-full whitespace-nowrap '>{item.head}</h4>
              </div>
               <div className=''>
                 <img className='lg:size-[70px]  size-[56px] ' src={item.img}/>
                 <h4 className='my-4 lg:text-[24px] text-xl font-medium'>{item.title}</h4>
                 <p className='text-sm md:text-base lg:text-lg text-[#E6E6E6] max-w-[340px] '>{item.des}</p>

                 <div className='flex items-center justify-center mt-10 p-2'>
                    <button className='text-center font-medium text-white py-2 bg-[#262626] w-full rounded-md hover:transition-all hover:scale-105 hover:duration-200'>{item.dataBtn}</button>
                 </div>
               </div>
           </div>
         ))}

         </div>

        </section>
  )
}

export default Cardpage