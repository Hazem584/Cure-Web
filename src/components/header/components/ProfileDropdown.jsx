import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";

import Dropdown from "./Dropdown";

const ProfileDropdown = () => {
     const [dropdownflag, setDropdownFlag] = useState(false);

     return (
          <div className="flex gap-8 items-center">
               <div className="flex gap-3 text-1xl">
                    <FaBarsStaggered />

                    <GrNotification />
               </div>
               <div className="dropdown relative">
                    <div
                         tabIndex={0}
                         role="button"
                         className="btn btn-ghost btn-circle avatar"
                    >
                         <div
                              className="w-10 rounded-full overflow-hidden"
                              role="button"
                              onClick={() => setDropdownFlag((prev) => !prev)}
                         >
                              <img
                                   alt="Tailwind CSS Navbar component"
                                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                              />
                         </div>
                    </div>
                    {dropdownflag && <Dropdown />}
               </div>
          </div>
     );
};

export default ProfileDropdown;
