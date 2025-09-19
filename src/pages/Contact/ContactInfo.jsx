import React from 'react'

const Infopage = () => {
  return (
     <section className="xl:w-[50%] lg:w-[50%] md:w-[80%] w-[64%] mx-auto py-14">
     <form>
        <div className='flex items-center justify-center  flex-col md:flex-row gap-4 hover:transition-all hover:scale-100  duration-300  cursor-pointer'>
            <div className=' text-white py-6 px-14 bg-gray-500/15 rounded-md '> 
               <label className='font-medium text-[22px]'>Full Name</label> <br/>
                <input type='text'placeholder='Type here' className=' text-lg text-[#656567] outline-none border-b-[#333333] border-b-1 pb-0.5' />
            </div>

            <div className=' text-white py-6 px-14 bg-gray-500/15 rounded-md '> 
               <label className='font-medium text-[22px]'>Email</label> <br/>
                <input type='email' placeholder='Type here' className=' text-lg text-[#656567] outline-none border-b-[#333333] border-b-1 pb-0.5' />
            </div>

        </div>

        {/* chack part  */}
     
         <div className=' mt-16 bg-gray-500/15 md:p-4 rounded-md  '>
         <div className=' flex flex-col md:flex-row items-center justify-start gap-10 mx-auto  py-5'>
          <div>
             <label className=' text-[#FDFFFA] text-lg flex items-center gap-1.5 w-[200px] '>
             <input type="checkbox" name='Web Design' className=' size-4'/>Web Design
           </label>
            </div>

             <div>
             <label className='text-[#FDFFFA] text-lg flex items-center gap-1.5  w-[200px]'>
             <input type="checkbox" name='Collaboration'  className=' size-4'/>Collaboration
           </label>
            </div>
           
        </div>


         <div className=' flex items-center flex-col md:flex-row justify-start gap-10 mx-auto  py-5  '>
          <div>
             <label className='text-[#FDFFFA] text-lg flex items-center gap-1.5  w-[200px] '>
             <input type="checkbox" name='Mobile App Design'  className=' size-4'/>Mobile App Design
           </label>
            </div>

             <div>
             <label className=' text-[#FDFFFA] text-lg flex items-center gap-1.5  w-[200px]  '>
             <input type="checkbox" name='Collaboration'  className=' size-4'/>
             Others
           </label>
            </div>
           
        </div>


        </div>
  
     </form>
     </section>
  )
}

export default Infopage