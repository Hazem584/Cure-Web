import React from 'react'
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { PiGearSixLight } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
                    <div
                         tabIndex="-1"
                         className="menu absolute bg-white z-50 flex flex-col gap-3 right-0  font-montserrat bg-base-100 border border-gray-400 rounded-md z-1 w-72 mt-2 px-4 py-2 shadow"
                    >
                         <div className="user flex justify-between items-center justify-items-center ">
                              <div className="flex items-center gap-3">
                                   <Link to="Home">
                                        <div className="pic w-14 rounded-full overflow-hidden">
                                             <img
                                                  alt="Tailwind CSS Navbar component"
                                                  src="https://i.postimg.cc/vH3MDBr2/tom1.png"
                                             />
                                        </div>
                                   </Link>
                                   <div className="flex flex-col">
                                        <div className="profile-name text-1xl font-bold text-[georgia]">
                                             Uncle Tom
                                        </div>
                                        <div className="profile-address text-[0.65rem] text-gray-400">
                                             129,El-Nasr Street, Cairo
                                        </div>
                                   </div>
                              </div>

                              <button>
                                   <PiGearSixLight className="text-primary text-2xl" />
                              </button>
                         </div>
                         <div className="sub-menu flex flex-col gap-2">
                              <div className="rounded-md hover:bg-blue-gray-200  active:bg-red-500 transition-all duration-200" role='button'>
                                   <div className="flex justify-between items-center text-1xl h-12">
                                        <span className="flex items-center gap-1">
                                             <MdOutlinePayments className="text-2xl"/>
                                             <p>Payments</p>
                                        </span>
                                        <span>
                                             <IoIosArrowForward />
                                        </span>
                                   </div>
                              </div>
                              <div className="rounded-md hover:bg-blue-gray-200  active:bg-red-500 transition-all duration-200" role='button'>
                                   <div className="flex justify-between items-center text-1xl h-12">
                                        <span className="flex gap-1 items-center">
                                             <PiGearSixLight className="text-2xl" />
                                             <p>Settings</p>
                                        </span>
                                        <span>
                                             <IoIosArrowForward />
                                        </span>
                                   </div>
                              </div>
                              <div className="rounded-md hover:bg-blue-gray-200  active:bg-red-500 transition-all duration-200" role='button'>
                                   <div className="flex justify-between items-center text-1xl h-12">
                                        <span className="flex gap-1 items-center">
                                             <IoIosLock className="text-2xl" />
                                             <p>Privacy</p>
                                        </span>
                                        <span>
                                             <IoIosArrowForward />
                                        </span>
                                   </div>
                              </div>
                              <div className="rounded-md hover:bg-blue-gray-200  active:bg-red-500 transition-all duration-200" role='button'>
                                   <div className="flex justify-between items-center text-1xl h-12 text-red-400">
                                        <span className="flex items-center gap-1">
                                             <HiOutlineLogout className="text-2xl"/>
                                             <p>Logout</p>
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>
  )
}

export default Dropdown
