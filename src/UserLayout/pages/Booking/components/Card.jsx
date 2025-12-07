import React from "react";
import { Avatar } from "@material-tailwind/react";
import CardButttons from "./CardButttons";
import { format } from "date-fns";
const Card = ({
  Doctor: { appointmentDate, appointmentTime, status, doctor, id },
  refetch,
}) => {
  const date = new Date(appointmentDate);
  const formatted = format(date, "EEEE, MMMM dd ");

  return (
    <div className="border border-[#BBC1C7] dark:border-dark-borderDark  flex flex-col p-2 rounded-2xl   max-[639px]:w-11/12  ">
      <div className="flex justify-between items-center mt-3 gap-4 ">
        <div className="flex gap-3 dark:text-dark-textSecondary">
          <img src="./calendar-02.svg" alt="calendar" />
          <h1
            className={`text-xs ${
              status == "Upcoming"
                ? "text-[#05162C] dark:text-primary"
                : "text-[#6D7379]"
            }`}
          >
            {formatted}
          </h1>
          <h1 className="text-xs  dark:text-dark-textSecondary">
            {appointmentTime}
          </h1>
        </div>
        <h1
          className={`text-sm font-medium mr-3
            ${status === "Cancelled" ? "text-[#FC4B4E]" : ""}
            ${status === "Upcoming" ? "text-[#145DB8]" : ""}
            ${status === "Completed" ? "text-[#4CAF50]" : ""}
        `}
        >
          {status}
        </h1>
      </div>
      <hr className=" border-gray-300 my-2 w-[97%] " />
      <div className="flex gap-3 px-2">
        <Avatar src={doctor?.image} alt="avatar" />
        <div className="flex flex-col">
          <h1 className="text-[#33384B] font-semibold dark:text-dark-textOnDark">
            {doctor?.name}
          </h1>
          <h1 className="text-[#6D7379] dark:text-dark-textSecondary">
            {doctor?.specialty}
          </h1>
        </div>
      </div>
      <div className="flex gap-3 px-3">
        <img src="/location-icon.svg" alt="location" className="w-4 " />
        <h1 className="mt-2 text-[#6D7379] dark:text-dark-textSecondary">
          {doctor?.address}
        </h1>
      </div>
      <div className="mt-4">
        <CardButttons
          status={status}
          id={id}
          refetch={refetch}
          doctorId={doctor?.id}
        />
      </div>
    </div>
  );
};
export default Card;
