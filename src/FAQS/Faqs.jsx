import React, { useState } from 'react'
import { data } from './FaqsData/Data';
import { IoIosArrowDown } from "react-icons/io";


export default function Faqs() {
  let [show,setshow]=useState(data[0].id);

  return (
    <section className='py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen'>
      
      <div className='max-w-4xl mx-auto px-6'>
        
        <h1 className='text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
          Frequently Asked Questions
        </h1>

        <div className='space-y-6'>
        {
          data.map((text,i)=>{
            return(
              <div 
                key={i} 
                className='group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100'
              >

                {/* Question */}
                <h2 
                  onClick={()=>setshow(text.id)} 
                  className='cursor-pointer flex justify-between items-center p-6 text-lg font-semibold text-gray-800'
                >
                  {text.question}

                  <span className={`text-2xl font-bold text-blue-600 transition-transform duration-300 ${
                    show===text.id ? "rotate-45" : ""
                  }`}>
                    <IoIosArrowDown />
                  </span>
                </h2>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    show===text.id ? "max-h-40 px-6 pb-6" : "max-h-0"
                  }`}
                >
                  <p className='text-gray-600 leading-relaxed'>
                    {text.answer}
                  </p>
                </div>

              </div>
            )
          })
        }
        </div>

      </div>

    </section>
  )
}
