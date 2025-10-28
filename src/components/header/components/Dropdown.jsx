import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { PiGearSixLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Button, MenuItem, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

import Themetoggler from "./Themetoggler";

const Dropdown = ({ setIsMenuOpen, theme, setTheme }) => {
  const profileMenuItems = [
    {
      label: "Payment Method",
      icon: CiCreditCard1,
    },
    {
      label: "Settings",
      icon: PiGearSixLight,
    },
    {
      label: "Privacy Policy",
      icon: IoIosLock,
    },
    {
      label: "Log Out",
      icon: HiOutlineLogout,
    },
  ];
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <MenuItem>
        <div className="user flex !hover:border-0 justify-between items-center justify-items-center ">
          <div className="flex items-center gap-3">
            <Link to="/">
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://i.postimg.cc/hhFXM7tG/ba06b3e7882ffb9e60838270ea0dd9b82b74eda6.jpg"
                  alt="avatar"
                />
                <div>
                  <Typography variant="h6" className="font-georgia">
                    Seif Mohamed
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-[0.8rem]"
                  >
                    129,El-Nasr Street, Cairo
                  </Typography>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <PiGearSixLight className="text-primary text-2xl" />
          </div>
        </div>
      </MenuItem>
      {profileMenuItems.map(({ label, icon }, key) => {
        const isLastItem = key === profileMenuItems.length - 1;
        return (
          <MenuItem
            key={label}
            onClick={closeMenu}
            className={`flex items-center justify-between gap-2 rounded text-secondry active:bg-blue-gray-300 ${
              isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
            }`}
          >
            <div className="flex gap-2">
              {React.createElement(icon, {
                className: `h-6 w-6 ${isLastItem ? "text-red-500" : ""}`,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </div>
            <IoIosArrowForward />
          </MenuItem>
        );
      })}
      <MenuItem>
        <Themetoggler theme={theme} setTheme={setTheme} />
      </MenuItem>
    </>
  );
};

export default Dropdown;
