import React from 'react'
import { motion } from 'framer-motion'
const SquareUp = () => {
    return (
        <div className='px-3 md:px-8  py-6'>
            <div className='flex flex-col md:flex-row gap-5 items-center'>
                <div className=''>
                    <motion.div
                    variants={{
                    hidden:{opacity:0,y:75},
                    visible:{opacity:1,x:0}
                    }} 
                    initial="hidden"
                    animate="visible"
                    transition={{duration:0.5,delay:0.25}}
                     viewport={{ once: true }}
                    >
                        <h2 className=' mb-3 text-5xl font-semibold px-3 md:px-8'>About SquareUp</h2>
                        <p className='text-secoundary max-w-[598px] px-3 md:px-8'>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                    </motion.div>
                </div>
                <motion.div
                variants={{
                    hidden:{opacity:0,y:0},
                }} 
                initial="hidden"
                whileInView={{ opacity: 1 ,y:75}}
                transition={{duration:0.5,delay:0.25}}
                 className='lg:w-1/2 w-full flex flex-col items-center justify-center'>
                    <img src="/images/about/about-squre.png" className='w-[598px] h-[571px] px-10 py-8 flex-1 object-cover' alt="" />
                </motion.div>
            </div>
        </div>
    )
}

export default SquareUp