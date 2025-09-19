import React from 'react'
import { useState,useEffect } from 'react'
import logos from '/images/Logo.webp'
import { Link } from 'react-router'
const Footer = () => {
   const [data,setdata]=useState([])
    const [isOpen,setIsopen] = useState(false)
    useEffect(()=>{
      const response=fetch("/data/navbar.json").then((res)=>{
        return res.json()
      }).then((data)=>setdata(data))
    },[])
  return (

    <div className='max-w-[1596px] mx-auto bg-black px-6 py-4'>
      <div className='flex flex-col md:flex-row gap-5 justify-between items-center'>
        {/* ....................logo.................... */}
        <div className='flex items-center gap-2'>
          <img src={logos} alt="" className='z-50 w-[60px] h-[60px]' />
          <h2>SquareUp</h2>
        </div>

         {/* .............................Navitem.................................... */}
        <ul className='flex flex-col md:flex-row gap-3 lg:gap-[30px]'>
         {
          data.map((item)=>{
            return <Link className='cursor-pointer text-[16px] hover:text-gray-400 transition-all duration-200' to={`${item.item=="Home"?"/":(item.item).toLowerCase()}`} key={item.id}>
              {item.item}
            </Link>

          }
        )    
         }
        </ul>

        {/* ..........social icon ............. */}
        <div className='flex flex-col md:flex-row items-center justify-between border-1 border-gray-800 px-2 py-1 rounded-2xl inset-1 shadow-sm'>
         <div className='flex'>
           <li className='list-none flex-1 rounded-xl bg-transparent to-black py-3 px-4 cursor-pointer text-sm inline-flex' >Stay Connected</li>
         </div>
          <img src="/images/facebook-icon.png" className='cursor-pointer flex-1 w-14' alt="" />
          <img src="/images/twitter-icon.png" className='cursor-pointer flex-1  w-14' alt="" />
          <img src="/images/linkedin-icon.png" className='cursor-pointer flex-1  w-14' alt="" />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-2 justify-between items-center mt-8'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col lg:flex-row gap-6  py-4 px-6 shadow-sm border border-gray-900 inset-2.5 rounded-2xl'>
            <div className='flex gap-4'>
              <img src="/images/email-icon.png" alt="" />
              <p>hello@squareup.com</p>
            </div>

             <div className='flex gap-4'>
              <img src="/images/phone-icon.png" alt="" />
              <p>+91 91813 23 2309</p>
            </div>

             <div className='flex gap-4'>
              <img src="/images/location-icon.png" alt="" />
              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
         <div className='flex justify-end relative right-1'> 
            <p className='right-0'>© 2023 SquareUp. All rights reserved.</p>
          </div>

      </div>
    </div>
  )
}

export default Footer