import React from 'react'
import chromeIcon from '../assets/logo-chrome.svg'
import firefoxIcon from '../assets/logo-firefox.svg'
import operaIcon from '../assets/logo-opera.svg'


const Extension = () => {
    const browsers = [{
        name: "Add to Chrome",
        version: "Minimum Version 62",
        icon: chromeIcon,
        },

    {
        name: "Add to Firefox",
        version: "Minimum Version 55",
        icon: firefoxIcon,
    },
    {
        name: "Add to Opera",
        version: "Minimum Version 46",
        icon: operaIcon,
    }
];



  return (
    <section className='py-20'>
         {/* Header */}
        <div className='container mx-auto px-6'>
            <div className='text-center max-w-[600px] mx-auto mb-16'>
            <h2 className="text-3xl font-bold text-[#242A45] mb-6">
            Download the extension
          </h2>
          <p className="text-[#9194A2] text-lg leading-relaxed">
            We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
          </p>
    </div>


        {/* Browser Cards */}
        <div className='flex flex-col md:flex-row justify-center md:items-start items-center  gap-x-16 max-w-6xl mx-auto px-4'>
            {browsers.map((browser) => (
                <div key={browser.name}
                className={`bg-white rounded-xl shadow-xl p-8 flex flex-col items-center w-[2840px] relative ${browser.className}` }
                >
                    {/* Dot Pattern */}
                    <div className='absolute right-0 left-0 h-1 bg-dotted-pattern'></div>

                    <img src={browser.icon} 
                    alt={browser.name} 
                    className='w-24 h-24 mb-8'
                    />
                    <h3 className='text-xl font-bold text-[#242A45] mb-2'>
                        {browser.name}
                    </h3>
                    <p className='text-[#9194A2] mb-8'>
                        {browser.version}
                    </p>

                    <button className='bg-[#5267DF] text-white w-[300px] h-48px rounded-lg hover:bg-opacity-90 transition-colors font-medium p-3'>
                        Add & Install Extension
                    </button>
                </div>
            ))}
        </div>
        
    </div>

        
    </section>
  )
}

export default Extension
