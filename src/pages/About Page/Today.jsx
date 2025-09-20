import React from 'react'
import { motion } from 'framer-motion'
import logos from '/images/Logo.webp'
const Today = () => {
    return (
        <div className=' px-3 md:px-8 lg:px-12 py-10'>
            <div className='flex gap-3 items-center justify-between'>
                {/* ......logo....... */}
                <div className='flex flex-col md:flex-row gap-4 items-center justify-center space-y-2' >
                    <motion.img
                        variants={{
                            hidden: { opacity: 0, x: -75 },

                        }}
                        initial="hidden"
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        src={logos} alt="" className='w-[150px] h-[150px] px-4 py-4' />
                    <div className='space-y-2.5'>
                        <motion.h3
                            variants={{
                                hidden: { opacity: 0, x: 75 },

                            }}
                            initial="hidden"
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className='text-secoundary px-3 md:px-8'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</motion.h3>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 75 },

                            }}
                            initial="hidden"
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className='text-secoundary max-w-[1242px] mx-auto px-3 md:px-8'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</motion.p>
                    </div>
                </div>



            </div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },

                }}
                initial="hidden"
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flex flex-col items-center justify-center'>
                <div className='flex flex-col lg:flex-row gap-3 mt-5 items-center space-y-2'>
                    <p className='text-secoundary px-8'>Welcome to SquareUp</p>
                    <p className='bg-[#262626] text-white px-8' >Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</p>
                    <button className='px-4 py-2 bg-primary text-black cursor-pointer rounded-xl'>Start Project</button>
                </div>
            </motion.div>
        </div>
    )
}

export default Today