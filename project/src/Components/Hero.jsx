import React from 'react'
import img1 from '../assets/illustration-hero.svg'


const Hero = () => {
  return (
    <div className='container mx-auto px-6 py-6 pt-[200px] flex flex-col-reverse md:flex-row items-center'>
      
        {/* left content */}
        <div className='md: w-1/2 mt-10 md:mt-0 pr-8 mx-10'>
            <h1 className='text-[3.75rem] font-bold leading-[1] mb-10 text-[#242A45]'>A Simple Bookmark Manager</h1>

          <p className='text-2xl text-[#9194A2] mb-8 md:pr-10 leading-[2rem] max-w-[]'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>

          <div className='flex space-x-4'>
            <button className='bg-[#5267DF] text-white px-6 py-4 rounded-md hover:bg-opacity-90 transition-colors shadow-md font-bold'>Get It On Chrome</button>
            
            <button className='bg-gray-100 text-[#242A45] px-6 py-4 rounded-md hover:bg-gray-200 transition-colors shadow-md font-bold' >Get It On Firefox</button>
          </div>
        </div>


        {/* Right Content - Image */}
        <div className='md:2-1/2 relative'>
          <div className=' relative z-10'>
            <img src={img1} alt="" className='w-full h-auto max-w-2xl ml-auto'  />
          </div>

        {/* Background Shape */}
          <div className=' absolute right-0 top-1/2 transform translate-x-20 -translate-y-1/3 w-[100%] h-[90%] bg-[#5267DF] rounded-l-full -z-10'></div>
        </div>


    </div>
  )
}

export default Hero
