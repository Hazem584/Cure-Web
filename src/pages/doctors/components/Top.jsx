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
          flex flex-shrink-0 items-center justify-center space-x-2
          px-4 py-2 
          border border-gray-300 rounded-lg 
           text-gray-700
          shadow-sm
          hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-blue-500
           dark:hover:bg-gray-900
           dark:text-white
           dark:bg-dark-darkBg
          "
        >
          <IoFilterSharp  className="h-5 w-5 text-gray-500 dark:text-white ml-3" />
          <span className="hidden sm:inline text-sm font-medium ml-5 mr-5">Filter</span>
            <TiChevronLeft className="h-5 w-5 dark:text-white text-gray-500 border-l border-l-gray-600  " />
        </button>

      <input
          type="text"
          placeholder="Search doctors"
          className="
             border border-gray-300 rounded-lg 
            w-full px-2 py-2
            text-gray-900 placeholder-gray-500
          dark:bg-dark-darkBg dark:text-white
            focus:ring-0
            sm:text-sm "/>
            
      <button 
        type="button"
        className="mr-5
       
          flex flex-shrink-0 items-center justify-center space-x-2
          px-4 py-2 
          border border-gray-300 rounded-lg 
         text-gray-700
          shadow-sm
          hover:bg-gray-50
          dark:hover:bg-gray-900
           
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-dark-darkBg
        "
      >
        < PiMapPinThin className="h-5 w-5 text-gray-500 dark:text-white" />
        <span className="hidden sm:inline dark:text-white text-sm font-medium">Map</span>
        
      </button>

    </div>
  )
}

export default Top

 

