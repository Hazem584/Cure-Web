import React from "react";
import { Avatar } from "@material-tailwind/react";
import CardButttons from "./CardButttons";
const Card = ({
  Doctor: { name, specialty, appointment_time, address, photo, status },
}) => {
  return (
    <div className="border border-[#BBC1C7]  flex flex-col p-2 rounded-2xl">
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2">
          <img src="./calendar-02.svg" alt="calendar" />
          <h1
            className={`text-xs ${
              status == "Upcoming" ? "text-[#05162C]" : "text-[#6D7379]"
            }`}
          >
            {appointment_time}
          </h1>
        </div>
        <h1
          className={`text-sm font-medium mr-3
            ${status === "Canceled" ? "text-[#FC4B4E]" : ""}
            ${status === "Upcoming" ? "text-[#145DB8]" : ""}
            ${status === "Completed" ? "text-[#4CAF50]" : ""}
        `}
        >
          {status}
        </h1>
      </div>
      <hr className="border-gray-300 my-2 w-[97%] " />
      <div className="flex gap-3">
        <Avatar src={photo} alt="avatar" />
        <div className="flex flex-col">
          <h1 className="text-[#33384B] font-semibold">{name}</h1>
          <h1 className="text-[#6D7379]">{specialty}</h1>
        </div>
      </div>
      <div className="flex gap-3">
        <img src="/location-icon.svg" alt="location" />
        <h1 className="mt-2 text-[#6D7379]">{address}</h1>
      </div>
      <div className="mt-4">
        <CardButttons status={status} />
      </div>
    </div>
  );
};
export default Card;
