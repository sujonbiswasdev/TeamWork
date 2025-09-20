import React from 'react'
import { Link } from 'react-router'

const Responsive = ({data,isOpen,setIsopen}) => {
  return (
    <div className='overflow-hidden '> 
        {data &&(
            <div className='w-full fixed bg-black text-white h-full overflow-hidden top-0 left-0 z-50 px-8 py-8'>
               <div className='flex gap-2 justify-between'>
               <div className='flex flex-col'>
                  {data.map((item)=>(
                    <Link  to={`/${(item.item).toLowerCase()}`} onClick={()=>setIsopen(!isOpen)} className='text-white cursor-pointer text-2xl'>{item.item}</Link>
                ))}
               </div>

               <button onClick={()=>setIsopen(!isOpen)} className='text-4xl text-black absolute top-0 right-0 px-6 py-4 cursor-pointer'>x</button>
               </div>
               <button className='flex cursor-pointer md:hidden px-4 py-2 mt-4  bg-primary text-black rounded-xl'>Contact Us</button>

            </div>
        )}
    </div>
  )
}

export default Responsive