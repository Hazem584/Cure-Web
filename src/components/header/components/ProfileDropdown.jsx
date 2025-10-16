import React from 'react'
import { GrNotification } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { PiGearSixLight } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link  } from "react-router-dom";

const ProfileDropdown = () => {
  return (
               <div className="flex gap-8 items-center">
                    <div className="flex gap-3 text-1xl">
                         <FaBarsStaggered />

                         <GrNotification />
                    </div>
                    <div className="dropdown dropdown-end">
                         <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-ghost btn-circle avatar"
                         >
                              <div className="w-10 rounded-full">
                                   <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                   />
                              </div>
                         </div>
                         <ul
                              tabIndex="-1"
                              className="menu menu-lg font-montserrat dropdown-content bg-base-100 border border-gray-400 rounded-box z-1 mt-3 w-80 p-2 shadow"
                         >
                              <div className="user flex px-2 justify-between items-center  justify-items-center mb-6">
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
                                             <div className="profile-address text-gray-400">
                                                  <span></span>
                                                  129,El-Nasr Street, Cairo
                                             </div>
                                        </div>
                                   </div>

                                   <button>
                                        <PiGearSixLight className="text-primary text-2xl" />
                                   </button>
                              </div>
                              <li>
                                   <div className=" justify-between text-1xl">
                                        <span className="flex gap-1">
                                             <MdOutlinePayments />
                                             <p>Payments</p>
                                        </span>
                                        <span>
                                             <IoIosArrowForward />
                                        </span>
                                   </div>
                              </li>
                              <li>
                                   <div className=" justify-between text-1xl">
                                        <span className="flex gap-1">
                                             <PiGearSixLight />
                                             <p>Settings</p>
                                        </span>
                                        <span>
                                             <IoIosArrowForward />
                                        </span>
                                   </div>
                              </li>
                              <li>
                                   <div className=" justify-between text-1xl">
                                        <span className="flex gap-1">
                                             <IoIosLock />
                                             <p>Privacy</p>
                                        </span>
                                        <span>
                                             <IoIosArrowForward />
                                        </span>
                                   </div>
                              </li>
                              <li>
                                   <div className=" justify-between text-red-400 text-1xl">
                                        <span className="flex gap-1">
                                             <HiOutlineLogout />
                                             <p>Logout</p>
                                        </span>
                                        <span>
                                             <IoIosArrowForward />
                                        </span>
                                   </div>
                              </li>
                         </ul>
                    </div>
               </div>
  )
}

export default ProfileDropdown
