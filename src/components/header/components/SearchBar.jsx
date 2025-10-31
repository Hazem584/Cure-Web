import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
               <div className="search content-center text-center w-2/5 relative">
                    <input
                         type="text"
                         placeholder="      Search about specialty, doctor "
                         className="h-8 px-5 py-2 peer focus:outline-none w-full bg-lighttertiary dark:bg-transparent rounded-md dark:border-b-2 dark:text-dark-textOnDark dark:border-dark-borderDark"
                    />
                    <CiSearch className="absolute peer-focus:hidden text-[1.4rem] top-1 left-3 text-gray-400 dark:text-dark-darkNeutral" />
               </div>
  )
}

export default SearchBar
