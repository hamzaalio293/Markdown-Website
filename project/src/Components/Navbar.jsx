import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="ml-[45px] w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-xl font-bold">BOOKMARK</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">FEATURES</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">DOWNLOAD</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
          <a href="#" className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors">LOGIN</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
