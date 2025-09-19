import React from 'react'
import { contactdatapage } from '../../../public/data/data'

const HelpPage = () => {
  return (
    <section className="xl:w-[75%] lg:w-[80%] md:w-[80%] w-[85%] mx-auto pt-14">
    <div className='flex flex-col md:flex-row gap-6 lg:items-center lg:justify-center justify-normal'>
        {contactdatapage.map((item,index)=>(
          <div key={index} className=''>
            <div className=' bg-gray-500/15 py-2 px-3 rounded-md flex items-center   gap-2 '>
                <img src={item.infoimg}/>
                <h4 className=' text-white'>{item.infotitle}</h4>            
                </div>
          </div>
        ))}
    </div>

    </section>
  )
}

export default HelpPage 