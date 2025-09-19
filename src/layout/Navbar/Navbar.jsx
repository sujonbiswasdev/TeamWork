import React, { useEffect, useState } from 'react'
import logos from '/images/Logo.webp'
import { Link } from 'react-router'
import Responsive from './Responsive'
const Navbar = () => {
  const [data,setdata]=useState([])
  const [isOpen,setIsopen] = useState(false)
  useEffect(()=>{
    const response=fetch("/data/navbar.json").then((res)=>{
      return res.json()
    }).then((data)=>setdata(data))
  },[])
  return (

    <div className='w-full md:max-w-[1600px] mx-auto px-6 md:px-12 py-2 bg-black'>
      <nav className='flex gap-5 justify-between items-center'>
        {/* .......................logo............................. */}
       
        <div className='flex items-center gap-2'>
           <img src={logos} alt="" className='z-50 w-[60px] h-[60px]' />
           <h2>SquareUp</h2>
        </div>

        {/* .............................Navitem.................................... */}
        <ul className='hidden md:flex gap-3 lg:gap-[30px]'>
         {
          data.map((item)=>{
            return <Link className='cursor-pointer text-[16px] hover:text-gray-400 transition-all duration-200' to={`${item.item=="Home"?"/":(item.item).toLowerCase()}`} key={item.id}>
              {item.item}
            </Link>

          }
        )
         
         }
        </ul>

        {/* ......................button....................... */}
        <button className='hidden md:block cursor-pointer px-4 py-2  bg-primary text-black rounded-xl'>Contact Us</button>

        {/* .....................Responsive navItem............. */}
       {isOpen ?(
        <div className='md:hidden flex'>
         <Responsive data={data} isOpen={isOpen} setIsopen={setIsopen}/>
       </div>
       ):('')}

       <div className='bg-red-600 text-white px-4 py-2 rounded md:hidden flex' onClick={()=>setIsopen(!isOpen)}>
        O
       </div>
      </nav>

    </div>

    <div className='bg-black text-white'></div>

  )
}

export default Navbar