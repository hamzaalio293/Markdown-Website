import { useState } from "react" 


const Questions = () => {
    const [activeQuestion, setActiveQuestion] = useState(null)

    const question = [ {
        id: 1,
        question: 'What is Bookmark?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
        },

        {
        id: 2,
        question: 'How can I request a new browser?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
        },

        {
        id: 3,
        question: 'Is there a mobile app?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
        },

]

    
  return (
    <section className='py-20'>
        <div className='container mx-auto px-6'>

            {/* Header */}
            <div className='text-center max-w-[600px] mx-auto mb-16'>
                <h2 className='text-3xl font-bold text-[#242A45] mb-6'>
                Frequently Asked Questions
                </h2>
                <p className='text-[#9194A2] text-lg leading-relaxed'>
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                </p>
            </div>


    {/* Questions */}
    <div className='max-w-[700px] mx-auto'>
        {question.map((q) => {
            return (
            <div key={q.id} className='border-b border-gray-300'>
            <button
                className='w-full py-4 flex justify-between items-center hover:text-[#FA5959] transition-colors'
                onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)} >
            
            <span className='text-lg text-left'>{q.question}</span>
                <svg className={`w-6 h-6 transform transition-transfor    
                    ${activeQuestion === q.id ? 'rotate-180 text-[#FA5959]' : ''}`}
                    
                    fill='none' stroke='currentColor' viewBox='0 0 24 24'>

                    <path stroke='round' strokeLinejoin='round' strokeWidth={2} d='m19 9l-7 7-7-7'></path>
                </svg>
            </button>

            {activeQuestion === q.id && (
                <div className='py-4 text-[#9194A2] leading-relaxed'>
                    {q.answer}
            </div>
            )}
        </div>
        )
    })}
</div>

        {/* More Info Button */}
        <div className="text-center mt-12">
          <button className="bg-[#5267DF] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            More Info
          </button>
        </div>
     </div>
    </section>
  )
}

export default Questions
