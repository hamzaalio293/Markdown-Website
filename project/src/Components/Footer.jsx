import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-[#5267DF] text-white'>
        {/* NewsLetter */}
        <div className='py-20 bg-[#5267DF]'>
            <div className='container mx-auto px-6'>
                <div className='text-center max-w-[440px] mx-auto'>
                    <p className='uppercase tracking-[0.2em] text-xl mb-8'>
                    35,000+ ALREADY JOINED
                    </p>
                    <h2 className='text-[2.25rem] leading-[2.5rem] font-bold mb-8'>
                    Stay up-to-date with what we're doing
                    </h2>
                    <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                        <input type="email"
                        placeholder='Enter your email address'
                        className='w-full md:w-auto bg-white text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap'
                        />
                        <button className='w-full md:w-auto bg-[#FA5959] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap font-bold'>
                        Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>


         {/* Bottom Footer */}
         <div className='bg-[#242A45] py-[60px]'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-8 md:mb-0'>
                        {/* Logo */}
                        <div className="flex items-center">
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-21 text-xl font-bold">BOOKMARK</span>
                    </div>


                        {/* Navigation Links */}
                        <div className='flex items-center gap-10 font-thin mr-8'>
                            <a href="#" className='uppercase text-lg hover:text-[#FA5959] transition-colors'>Features</a>
                            <a href="#" className='uppercase text-lg hover:text-[#FA5959] transition-colors'>Download</a>
                            <a href="#" className='uppercase text-lg hover:text-[#FA5959] transition-colors'>FAQ</a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='flex items-center gap-8'>
                        <a href="#" className='hover:text-[#FA5959] transition-colors'>
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        </a>

                        <a href="#" className='hover:text-[#FA5959] transition-colors'>
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
         </div>
    </footer>
  )
}

export default Footer
