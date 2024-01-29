import React from 'react'

export default function Counter() {
  return (
    <>
      <div className='grid md:grid-cols-3 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-t-[1px] border-[#4FA366] mt-14'>
       <div className='border-t-[1px] md:border-t-0  md:border-r-[1px] border-[#4FA366] py-10'>
       <p className='text font-[400] text-[40px] md:text-[50px] lg:text-[64px] text-white text-center leading-[45px] lg:leading-[60px]'>30+</p> 
       <p className='font-syne font-[400] text-[16px] md:text-[20px] lg:text-[32px] text-[#54FF7A] text-center '>speakers</p> 
       </div>
       <div className='border-t-[1px] md:border-t-0 md:border-r-[1px] border-[#4FA366] py-10'>
       <p className='text font-[400] text-[40px] md:text-[50px] lg:text-[64px] text-white text-center leading-[45px] lg:leading-[60px]'>13</p> 
       <p className='font-syne font-[400] text-[16px] md:text-[20px] lg:text-[32px] text-[#54FF7A] text-center '>DAOs represented</p> 
       </div>   
       <div className='border-t-[1px] md:border-t-0 border-[#4FA366] py-10'>
       <p className=' text font-[400] text-[40px] md:text-[50px] lg:text-[64px] text-white text-center leading-[45px] lg:leading-[60px]'>18h+</p> 
       <p className='font-syne font-[400] text-[16px] md:text-[20px] lg:text-[32px] text-[#54FF7A] text-center '>of content</p> 
       </div>
      </div>
    </>
  )
}
