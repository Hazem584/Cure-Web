import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
               <div className="search content-center text-center w-1/3 relative">
                    <input
                         type="text"
                         placeholder="      Search about specialty, doctor "
                         className="h-8 p-5 peer focus:outline-none w-full dark:border-b-2 dark:text-dark-textOnDark dark:border-dark-borderDark dark:bg-dark-darkBg"
                    />
                    <CiSearch className="absolute peer-focus:hidden text-[1.4rem] top-2 left-3 text-gray-400 dark:text-dark-darkNeutral" />
               </div>
  )
}

export default SearchBar
