import React from 'react'
import {Input} from "@heroui/react";
import {Checkbox} from "@heroui/react";
import {Textarea} from "@heroui/react";

const InputSection = () => {
  return (
    <div className='mt-6'>
      <div className='flex flex-col justify-center items-center'>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
      <Input label="Email" type="email" />
      <Input label="Email" placeholder="Enter your email" type="email" />
     </div>
      </div>
     <div className='flex flex-col justify-center items-center '>
      <div className=' bg-gray-900 px-6 py-6 lg:w-[850px] md:w-[400px] w-full '>
      <h2 className='font-bold mt-6'>Why are you contacting us?</h2>
      <div className='grid grid-cols-2 space-y-6 mt-6  px-6 py-8 rounded-2xl'> 
        <div>
            <Checkbox defaultSelected lineThrough>
        Option
         </Checkbox>
        </div>
        <div>
            <Checkbox lineThrough>
        Option
         </Checkbox>
        </div>
        <div>
            <Checkbox lineThrough>
        Option
         </Checkbox>
        </div>
        <div>
            <Checkbox  lineThrough>
        Option
         </Checkbox>
        </div>
      </div>

   
     </div>
     </div>
     <div className='flex flex-col justify-center items-center'>
        <img src="/images/home/FormElement.png" alt="" />
      </div>

      <div className='flex flex-col justify-center items-center'>
        <Textarea
      isRequired
      className=' px-6 py-6 lg:w-[850px] md:w-[400px] w-full '
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
    />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <button className='px-6 py-3 bg-[#9EFF00] text-[#1A1A1A] text-sm rounded-md mt-5'>Submit</button>
      </div>
    </div>
  )
}

export default InputSection
