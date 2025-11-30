import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { FaBarsStaggered, FaRegCircleXmark } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NotificationMenu from "./NotificationMenu";

const ProfileAvatar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [notificationMenu, setNotificationMenu] = useState(false);

  const [logged, setlogged] = useState(
    localStorage.getItem("user") && localStorage.getItem("token")
  );

  const notifications = [
    {
      title: "Upcoming Appointment",
      details: "Reminder: You have an appointment with...",
      type: "upcoming",
      elpased: "1h",
    },
    {
      title: "Appointment completed",
      details:
        "You have successfully booked your appointment with Dr. Emily Walker.",
      type: "completed",
      elpased: "1h",
    },
    {
      title: "Appointment Cancelled",
      details:
        "You have successfully cancelled your appointment with Dr. David Patel.",
      type: "canceled",
      elpased: "1h",
    },
  ];
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <div className="flex gap-8 items-center">
      <div
        className={`flex gap-5 font-montserrat text-xs overflow-hidden transition-all duration-200 ${
          open ? "w-100 !overflow-visible" : "w-0"
        }`}
      >
        <div
          className={`flex gap-5 dark:text-dark-textSecondary  transition-transform duration-300 translate-x-36 ${
            open ? "!translate-x-0" : ""
          }`}
        >
          <Link to="/">
            <button className="bg-lighttertiary dark:bg-dark-bgSurface p-2 rounded-lg hover:scale-110 transition-transform duration-150">
              Home
            </button>
          </Link>
          <Link to="/booking">
            <button className="bg-lighttertiary dark:bg-dark-bgSurface p-2 rounded-lg hover:scale-110 transition-transform duration-150">
              Booking
            </button>
          </Link>
        </div>
      </div>

      <div className="flex gap-3 text-1xl dark:text-dark-textSecondary">
        <Typography
          as="button"
          className="hover:scale-110 rounded-lg bg-lighttertiary dark:bg-dark-bgSurface p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaRegCircleXmark /> : <FaBarsStaggered />}
        </Typography>
        <div className="notificationmenu relative">
          <Typography
            as="button"
            onClick={() => setNotificationMenu(!notificationMenu)}
            className="hover:scale-110 rounded-lg bg-lighttertiary dark:bg-dark-bgSurface p-2"
          >
            <GrNotification />
          </Typography>
          {notificationMenu && (
            <NotificationMenu notifications={notifications} />
          )}
        </div>
      </div>
      {logged ? (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center rounded-full p-0"
            >
              <Avatar
                variant="circular"
                size="md"
                alt="tania andrew"
                withBorder={true}
                color="blue-gray"
                className=" p-0.5"
                src={
                  user?.avatarUrl && user.avatarUrl.trim() !== ""
                    ? user.avatarUrl
                    : undefined
                }
              />
            </Button>
          </MenuHandler>

          <MenuList className="p-3 sm:w-1/3 sm:max-w-[300px] rounded-[20px] border-0 bg-lighttertiary">
            {/* the drop down menu */}
            <Dropdown
              setIsMenuOpen={setIsMenuOpen}
              theme={theme}
              setTheme={setTheme}
              user={user}
            />
          </MenuList>
        </Menu>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link to="/signin">
            <Typography
              as="button"
              className="text-[.6rem] md:text-[1rem] px-5 py-1 text-white font-montserrat bg-primary hover:bg-blue-700 active:scale-110 transition-all duration-200 text-center rounded-[10px]"
            >
              Sign In
            </Typography>
          </Link>
          <Link to="/signup">
            <Typography
              as="button"
              className="text-[.6rem] md:text-[1rem] px-5 py-1 text-white font-montserrat bg-primary hover:bg-blue-700 active:scale-110 transition-all duration-200 text-center rounded-[10px]"
            >
              Sign up
            </Typography>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
