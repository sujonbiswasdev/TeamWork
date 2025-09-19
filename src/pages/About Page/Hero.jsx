import React from 'react'
import { motion, scale } from 'framer-motion'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='bg-[url(/images/about/about_banner.png)] w-full h-[50vh] bg-no-repeat bg-center bg-cover z-20'>

        <div className='flex flex-col items-center justify-center z-50 relative'>
          <div className='flex flex-col items-center justify-center h-[300px]'>
              <div className='mx-auto space-y-2 flex flex-col md:items-center justify-center'>
                <motion.h1 variants={{
                    hidden:{opacity:0,x:0},
                    visible:{opacity:1,x:75}
                }} 
                initial="hidden"
                animate="visible"
                transition={{duration:0.5,delay:0.25}}
                viewport={{ once: true }}
                className='text-start lg:text-center text-[48px] font-Barlow font-bold md:-ml-12 ml-1'>About Us</motion.h1>
                <motion.p 
                variants={{
                    hidden:{opacity:0,x:75},
                    visible:{opacity:1,x:0}
                }} 
                initial="hidden"
                animate="visible"
                transition={{duration:0.5,delay:0.25}}
                viewport={{ once: true }}
                
                className='max-w-[996px] mx-auto text-[18px] font-normal text-center px-8'>Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.</motion.p>
            </div>
          </div>

        </div>

        </div>
   
    </div>
  )
}

export default Hero