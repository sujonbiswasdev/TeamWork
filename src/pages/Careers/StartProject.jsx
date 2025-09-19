import React from 'react'

const StartProject = () => {
  return (
  
         <section className='xl:w-[80%]  md:w-[85%] w-[90%] mx-auto py-14'>
         <div className='flex items-center justify-center lg:justify-start flex-col lg:flex-row lg:gap-10 gap-6'>
         <div className=''>
          <img className='lg:w-[160px] md:w-[100px] w-[80px] ' src='/images/careers/startlogo.png'/>
         </div>
         <div className='text-center lg:text-start'>
            <h4 className='xl:text-[30px]  md:text-[24px] text-lg font-semibold mb-2.5 text-[#98989A]'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h4>
            <p className='xl:text-lg md:text-base text-sm text-[#98989A]'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
         </div>
         </div>

         <div className='flex items-center flex-col lg:flex-row justify-between mt-10 gap-4'>
           <h6 className='lg:text-sm md:text-lg text-base text-[#98989A]'>Welcome to SquareUp</h6>
           <h6 className='lg:text-sm md:text-lg text-base text-[#f1f1f1] py-1.5 px-2.5 rounded-md bg-gray-500/15 my-6' >Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</h6>
           <button className='py-1.5 px-3 bg-[#9EFF00] text-base text-[#1A1A1A] font-medium rounded-md lg:w-fit w-full'>Start Project</button>
           <div>

           </div>
         </div>
         </section>
  )
}

export default StartProject