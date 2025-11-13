import React from "react";
import { Avatar } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const workingHoursText = (workingHours) => {
  if (!workingHours || typeof workingHours !== "object") {
    return "Not available";
  }

  const orderedDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  for (const day of orderedDays) {
    const info = workingHours?.[day];
    if (info?.available && info?.start && info?.end) {
      const capitalized = day.charAt(0).toUpperCase() + day.slice(1);
      return `${capitalized}: ${info.start} - ${info.end}`;
    }
  }

  return "Not available";
};

const Card = ({
  Doc: {
    name = "Unknown doctor",
    photo,
    image,
    rating,
    consultationPrice,
    specialty,
    workingHours,
    location,
  },
}) => {
  const avatarSrc =
    photo ||
    image ||
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80";

  const ratingValue =
    typeof rating === "object" ? rating?.average : rating ?? "N/A";

  const priceValue =
    typeof consultationPrice === "number"
      ? `EGP ${consultationPrice}`
      : "Not available";

  const locationText = location?.city || location?.address || "";
  const specialtyText = `${specialty || "Specialty not provided"}${
    locationText ? ` | ${locationText}` : ""
  }`;

  return (
    <div className="border border-white inline-flex flex-col p-2 rounded-2xl   max-[639px]:w-11/12  ">
      <div className="inline-flex gap-3 px-2  rounded-lg border-white ">
        <Avatar
          src={avatarSrc}
          alt={`Photo of Dr. ${name}`}
          variant="rounded"
          size="xxl"
          className="  object-cover rounded-lg"
        />

        <div className="inline-flex flex-col hamo">
          <h1 className="text-[#33384B] font-semi dark:text-dark-textOnDark mt-2 text-xl">
            {name}
          </h1>
          <h1 className="subheading text-neutral dark:text-dark-textSecondary font-normal text-[0.8rem] pt-2 ">
            {specialtyText}
          </h1>
          <div className="inline-flex gap-10 mt-3">
            <h1 className="inline-flex  dark:text-dark-textSecondary  gap-2">
              <FaStar className=" size-6" color="gold " />
              {ratingValue ?? "N/A"}
            </h1>

            <h1 className="inline-flex gap-2  dark:text-dark-textSecondary  ">
              {" "}
              <CiClock2 className="size-6 " /> {workingHoursText(workingHours)}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-5 ml-2 mb-2">
        <h1 className="text-xl font-semi text-gray-800 dark:text-white">
          Price
          <span className="text-lg text-gray-500 dark:text-gray-300">
            /hour
          </span>
        </h1>
        <h1 className="text-red-300 text-xl mr-5">{priceValue}</h1>
      </div>
      <button className="bg-blue-700 rounded-lg text-white w-full h-10 ">
        Book appoienmants
      </button>
    </div>
  );
};
export default Card;
