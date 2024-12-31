import {useState}  from 'react'
import tab1Image from '../assets/illustration-features-tab-1.svg';
import tab2Image from '../assets/illustration-features-tab-2.svg';
import tab3Image from '../assets/illustration-features-tab-3.svg';


const Features = () => {
    const [activeTab, setActiveTab] = useState('simple')

    const tabContent = {
        simple: {
            title: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            image: tab1Image
        },

        speedy: {
            title: "Intelligent search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            image: tab2Image
          },
          easy: {
            title: "Share your bookmarks",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            image: tab3Image
          }
    }

  return (
    <section className='py-20'>
        <div className="container mx-auto px-6">
        {/* Features Header */}
        <div className='text-center max-w-[600px] mx-auto mb-16'>
            <h2 className='text-3xl font-bold text-[#242A45] mb-6'>Features</h2>
            <p className='text-[#9194A2] text-lg leading-relaxed'>Our aim is to make it quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>



         {/* Tab Navigation */}
         <div className='flex flex-col md:flex-row justify-center items-center mb-16 border-b'>
         <button 
            className={`py-4 px-8 border-b-4 transition-colors ${
              activeTab === 'simple' ? 'border-red-500 text-[#242A45]' : 'border-transparent text-[#9194A2]'
            }`}
            onClick={() => setActiveTab('simple')}
          >
            Simple Bookmarking
          </button>

          <button
          className={`py-4 px-8 border-b-4 transition-colors ${
            activeTab === 'speedy' ? 'border-red-500 text-[#242A45]' : 'border-transparent text-[#9194A2]'
          }`}
            onClick={() => setActiveTab('speedy')}
          >
            Speedy Searching
          </button>

          <button
          className={`py-4 px-8 border-b-4 transition-colors ${
            activeTab === 'easy' ? 'border-red-500 text-[#242A45]' : 'border-transparent text-[#9194A2]'
          }`}
            onClick={() => setActiveTab('easy')}
          >
            Easy Sharing
          </button>
        </div>


          {/* Tab Content */}
          <div className='flex flex-col md:flex-row items-center'>
            {/* Left Image */}
            <div className='md:w-1/2 relative'>
            <div className="relative z-10">
              <img 
                src={tabContent[activeTab].image} 
                alt="Feature illustration" 
                className="w-full h-auto max-w-xl mx-auto"
              />
            </div>
        </div>

            {/* Right - Content */}
            <div className='md:w-1/2 mt-16 md:mt-0 md:pl-16'>
                <h3 className='text-3xl font-bold text-[#242A45] mb-6'>
                    {tabContent[activeTab].title}
                </h3>
                <p className='text-[#9194A2] text-lg leading-relaxed mb-8'>
                    {tabContent[activeTab].description}
                </p>

                <button className='bg-[#5267DF] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors'>
                More Info
                </button>
            </div>
          </div>
        </div>
    </section>
    
  )
}

export default Features
