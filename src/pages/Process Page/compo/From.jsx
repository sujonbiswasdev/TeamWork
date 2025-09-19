import React from 'react';
import { Checkbox } from '@heroui/react';
function From() {
  return (
    <section className="flex flex-col items-center py-7 md:py-12 mt-5 max-w-[900px] mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        <div className="bg-[##1E1E1E] border-2 border-[#262626]  py-6 px-6 rounded-md col-span-2 ">
          <div className="">
            <label className="block font-bold text-lg" htmlFor="FullName">
              Full Name
            </label>
            <input
              className="py-1.5  outline-none border-b-2 border-[#656567] block w-full"
              type="text"
              name="FullName"
              id="FullName"
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="bg-[##1E1E1E] border-2 border-[#262626]  py-6 px-6 rounded-md col-span-2">
          <div className="space-y-2">
            <label className="block font-bold text-lg" htmlFor="Email">
              Email
            </label>
            <input
              className="py-1.5  outline-none border-b-2 border-[#656567] block w-full bg-transparent "
              type="email"
              name="Email"
              id="Email"
              placeholder="Type here"
            />
          </div>
        </div>
      </div>

      <div className="bg-[##1E1E1E] border-2 border-[#262626]  py-6 px-6 rounded-md col-span-2 w-full space-y-6">
        <h3 className="font-bold text-balance text-lg">Why are you contacting us?</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full">
            <Checkbox radius='sm' size="lg" color="warning" defaultSelected>
              <h1 className="text-white">Web Design</h1>
            </Checkbox>
            <Checkbox radius='sm' size="lg" color="warning">
              <h1 className="text-white">Web Development</h1>
            </Checkbox>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Checkbox radius='sm' size="lg" color="warning">
              <h1 className="text-white">Web Design</h1>
            </Checkbox>
            <Checkbox radius='sm' size="lg" color="warning" >
              <h1 className="text-white">Web Development</h1>
            </Checkbox>
          </div>
        </div>
      </div>

      <div className="bg-[##1E1E1E] border-2 border-[#262626]  py-6 px-6 rounded-md col-span-2 w-full space-y-4">
        <h4 className='font-bold text-balance text-lg'>Your Budget</h4>
        <p className='text-[#E6E6E6] text-sm'>Slide to indicate your budget range</p>
        <img className='w-full' src="/images/process/RangeSlider.png" alt="" />
      </div>

      <div className="bg-[##1E1E1E] border-2 border-[#262626]  py-6 px-6 rounded-md col-span-2 w-full">
         <div className="space-y-3">
            <label className="block font-bold text-lg" htmlFor="FullName">
              Full Name
            </label>
            <input
              className="py-1.5  outline-none border-b-2 border-[#656567] block w-full"
              type="text"
              name="FullName"
              id="FullName"
              placeholder="Type here"
            />
            <input
              className="py-1.5  outline-none border-b-2 border-[#656567] block w-full"
              type="text"
              name="FullName"
              id="FullName"
            />
          </div>
      </div>
        <button className='bg-[#9EFF00]  text-black py-2 px-6 rounded-md cursor-pointer hover:bg-[#63a002] transition-all duration-300'>Submit</button>
    </section>
  );
}

export default From;
