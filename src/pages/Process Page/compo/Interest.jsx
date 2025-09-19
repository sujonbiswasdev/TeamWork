import React from 'react'

function Interest() {
  return (
    <section className='bg-[url(/images/process/process-container.png)] bg-cover bg-no-repeat py-7 md:py-12 mt-5'>
      <div className='flex flex-col items-center justify-center space-y-7 text-center'>
        <img src="/images/Logo.webp" alt="" />
        <div className='space-y-4'>
            <h3 className='font-bold text-2xl md:text-3xl'>Thank you for your Interest in SquareUp.</h3>
            <p className='text-[#E6E6E6] text-base max-w-[800px]'>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
        </div>
        <button className='bg-[#9EFF00] text-black  py-2 px-4 rounded cursor-pointer hover:bg-[#558d01] transition-all duration-300'>Start Project</button>
      </div>
    </section>
  )
}

export default Interest
