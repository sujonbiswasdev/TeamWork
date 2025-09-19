import React from 'react'

const Interest = () => {
  return (
    <div className='bg-[url(/images/home/hero.png)] bg-cover bg-center text-white py-6'>
      <div className='container mx-auto text-center '>
        <div className='flex flex-col justify-center items-center'>
          <img src="/images/home/Logo.png" alt="" />
        </div>
        <h1 className='font-bold mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Thank you for your Interest in SquareUp.</h1>
        <p className='text-sm text-gray-400'>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
        <button className='px-6 py-3 bg-[#9EFF00] text-[#1A1A1A] text-sm rounded-md mt-5'>Start Project</button>
      </div>
    </div>
  )
}

export default Interest
