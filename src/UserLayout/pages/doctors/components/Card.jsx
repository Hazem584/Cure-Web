import React from "react";
import { Avatar } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const workingHoursText = () => {
  const todayLabel = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return `${todayLabel}: 9:00 AM - 2:30 PM`;
};

const Card = ({ Doc }) => {
  const {
    name = "Unknown doctor",
    photo,
    image,
    rating,
    consultationPrice,
    specialty,
    workingHours,
    location,
  } = Doc || {};
  const navigate = useNavigate();

  const avatarSrc =
    photo ||
    image ||
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Twitter_default_profile_400x400.png";

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

  const doctorId = Doc?._id || Doc?.id;

  const handleBookAppointment = () => {
    if (doctorId) {
      navigate(`/appointments/${doctorId}`);
    }
  };

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
      <button
        type="button"
        onClick={handleBookAppointment}
        className="bg-blue-700 rounded-lg text-white w-full h-10 "
        disabled={!doctorId}
      >
        Book appoienmants
      </button>
    </div>
  );
};
export default Card;
