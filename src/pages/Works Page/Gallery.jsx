import React from 'react'
import { GalleryData } from '../../../public/data/data'


const MyGallery = () => {
  return (
    <>
        <section className='xl:w-[80%] lg:w-[90%] md:w-[95%] w-[90%] mx-auto py-14'>
         <div>
            <h4 className='xl:text-[48px] md:text-[38px] text-[28px] font-semibold mb-2.5 '>At SquareUp</h4>
            <p className='xl:text-lg md:text-base text-sm text-[#E6E6E6] xl:max-w-[1196px] md:max-w-[950px] max-w-[326px]'>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
            <div className=' bg-gray-600 w-fit py-1 px-1 rounded-md xl:mt-10 md:mt-5 mt-4 mb-4'>
                <p className='xl:text-lg md:text-base text-sm text-white'>Here are ten examples of our notable works:</p>
            </div>
         </div>
         {/* card part  */}
         <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 justify-center'>
         {GalleryData.map((item,index)=>(
            <div key={index} className='mt-10'>
              <p className='text-xl  md:text-lg xl:text-[26px] text-[#98989A] mb-4 xl:max-w-[698px]'>{item.head}</p>
              <img className='xl:w-full w-fit block' src={item.img} alt='img'/>
            </div>
         ))}

         </div>
        </section>
    </>
  )
}

export default MyGallery