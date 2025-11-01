import { Typography } from "@material-tailwind/react";
import React from "react";


export default function Notification({title, details, elpased_time, type, id}){
  const icons = {
    upcoming: "notificationIcons/upcomingicon.svg",
    completed: "notificationIcons/solar_check-circle-linear.svg",
    canceled: "notificationIcons/calendar-remove.svg",
  };
    return (
      <Typography as="button" className="flex p-3 w-full bg-white justify-between hover:bg-lighttertiary transition-colors duration-200">
        <div className="flex text-start items-center flex-1 gap-3">
          <div className="icon w-[50px] flex-shrink-0">
            <img src={icons[type]} className="w-full" alt="" />
          </div>

          <div className="content flex-1">
            <div className="title font-georgia">{title}</div>
            <div className="details text-[0.9rem] w-[98%] truncate whitespace-normal break-words font-montserrat font-normal">
              {details}
            </div>
          </div>
        </div>

        <div className="elpased self-start">{elpased_time}</div>
      </Typography>
    );
}
