import React from 'react'
import { PiMapPinThin } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { TiChevronLeft } from "react-icons/ti";

const Top = () => {
  return (
    <div className='flex justify-between gap-5'>

     
        
      
        <button
          type="button"
          className="
          ml-10
            flex items-center 
            px-4 py-2
            text-gray-700
             border border-gray-300 rounded-lg 
            hover:bg-gray-50
            focus:outline-none
          "
        >
          <IoFilterSharp  className="h-5 w-5 text-gray-500  ml-3" />
          <span className="hidden sm:inline text-sm font-medium ml-5 mr-5">Filter</span>
            <TiChevronLeft className="h-5 w-5 text-gray-500 border-l border-l-gray-600  " />
        </button>

      <input
          type="text"
          placeholder="Search doctors"
          className="
             border border-gray-300 rounded-lg 
            w-full px-2 py-2
            text-gray-900 placeholder-gray-500
            
            focus:ring-0
            sm:text-sm "/>
            
      <button 
        type="button"
        className="
        mr-32
          flex flex-shrink-0 items-center justify-center space-x-2
          px-4 py-2 
          border border-gray-300 rounded-lg 
          bg-white text-gray-700
          shadow-sm
          hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        < PiMapPinThin className="h-5 w-5 text-gray-500" />
        <span className="hidden sm:inline text-sm font-medium">Map</span>
        
      </button>

    </div>
  )
}

export default Top

 

