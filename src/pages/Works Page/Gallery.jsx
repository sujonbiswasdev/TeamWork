import React, { useState } from 'react'
import { GalleryData } from '../../../public/data/data'


const MyGallery = () => {
  const [show,setshow] = useState(4)

  const handleSeeMore = () =>{
    setshow((pre)=>pre + 2);
  }

  const visiblecards = GalleryData.slice(0,show)
  const seeMore = show < GalleryData.length
  return (
    <>
        <section className='xl:w-[80%]  md:w-[85%] w-[90%] mx-auto py-14'>
         <div>
            <h4 className='xl:text-[48px]  md:text-[38px] text-[28px] font-semibold mb-2.5 '>At SquareUp</h4>
            <p className='xl:text-lg md:text-base text-sm text-[#E6E6E6] xl:max-w-[1196px] md:max-w-[950px] max-w-[326px]'>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
            <div className=' bg-[#262626] w-fit py-2 px-2.5 rounded-md xl:mt-10 md:mt-5 mt-4 mb-4'>
                <p className='xl:text-lg md:text-base text-sm text-white'>Here are ten examples of our notable works:</p>
            </div>
         </div>
         {/* card part  */}
         <div className='grid lg:grid-cols-2  grid-cols-1 gap-10 md:gap-20 lg:gap-12 justify-center'>
         {visiblecards.map((item,index)=>(
            <div key={index} className='mt-10'>
              <p className='text-xl  md:text-lg xl:text-[26px] text-[#98989A] mb-4 xl:max-w-[698px]'>{item.head}</p>
              <img className='xl:w-full w-fit ' src={item.img} alt='img'/>
              <h4 className='text-[#E6E6E6] xl:text-2xl text-lg font-semibold my-4'>{item.title}</h4>
              <div className='flex items-center justify-between'>
               <p className='xl:text-xl md:text-base text-sm py-2 px-3 bg-[#262626] text-[#98989A] rounded-md'>{item.webLink}</p>
               <img className='w-fit' src={item.arrow}/>
              </div>
              <p className='text-[#98989A] text-sm md:text-base mt-5 md:max-w-[560px]  max-w-[310px]'>{item.des}</p>
            </div>
         ))}

         </div>

        {seeMore && (
           <div  className='flex items-center justify-center'>
           <button onClick={handleSeeMore} className='py-2 text-lg px-3 font-semibold w-fit bg-[#9EFF00] text-black rounded-md mt-10'>Show moro</button>
         </div>
        )}
        </section>
    </>
  )
}

export default MyGallery