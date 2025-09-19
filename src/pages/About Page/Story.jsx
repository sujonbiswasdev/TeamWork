import React from 'react'
import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
const Story = () => {
    const [data,setdata]=useState([])
      const [isOpen,setIsopen] = useState(false)
      useEffect(()=>{
        const response=fetch("/data/story.json").then((res)=>{
          return res.json()
        }).then((data)=>setdata(data))
      },[])
  return (
    <div>
        <div className='px-8 py-10'> 
            <h2 className='text-5xl font-bold'>Our Story</h2>
        </div>
        <div className='px-14 py-10 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-3'>
                {
                    data.map((item,index)=>(
                        <motion.div
                         variants={{
                    hidden:{opacity:0,y:75},
                }} 
                  initial="hidden"
                   whileInView={{ opacity: 1 ,y:0}}
                    transition={{duration:0.5,delay:0.25}}
                         key={index} className='bg-[#111111] rounded-2xl px-6 py-4'>
                            <div className='flex  gap-7 items-center '>
                                <h2 className='text-[#D8FF99] text-[50px] md:text-[100px] font-semibold'>{item.num}</h2>
                                <p className='text-[20px] md:text-5xl font-semibold text-[#D8FF99]'>{item.prof}</p>
                            </div>
                            <p className='text-secoundary max-w-[698px] mx-auto text-[16px] md:text-[18px]'>{item.des}</p>
                        </motion.div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Story