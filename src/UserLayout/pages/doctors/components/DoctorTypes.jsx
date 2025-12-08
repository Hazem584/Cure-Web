import React from "react";
import { FaTooth } from "react-icons/fa";
import { BsLungs } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { LuStethoscope } from "react-icons/lu";
import { GiNoseSide } from "react-icons/gi";
import { GiHeartOrgan } from "react-icons/gi";

import { FaRegEye } from "react-icons/fa";

const DoctorTypes = ({ selected, onSelect }) => {
  const buttons = [
    { name: "All", icon: null },
    { name: "Dentist", icon: <FaTooth /> },
    { name: "Cardiologist", icon: <GiHeartOrgan /> },
    { name: "ENT", icon: <GiNoseSide /> },
    { name: "Neurologist", icon: <GiBrain /> },
    { name: "General Practitioner", icon: <LuStethoscope /> },
    { name: "Ophthalmologist", icon: <FaRegEye /> },
    { name: "Pulr", icon: <BsLungs /> },
  ];

  return (
    <div
      className="

"
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => onSelect(button.name)}
          className={`border border-blue-gray-300 px-4 py-2 rounded-lg font-small [@media(max-width:639px)]:px-4 items-center gap-2 inline-flex mr-2 mb-2 ${
            selected === button.name
              ? "bg-[#145DB8] text-white dark:text-dark-textOnDark dark:bg-dark-bgSurface border-2 border-[#145DB8]"
              : "bg-[#FFFFFF] text-[#6D7379] border-[#FFFFFF] dark:bg-dark-darkBg dark:border-2 dark:border-dark-borderDark hover:text-blue-600"
          }`}
        >
          {button.icon && (
            <span className="text-lg inline-block">{button.icon}</span>
          )}
          <span>{button.name}</span>
        </button>
      ))}
    </div>
  );
};

export default DoctorTypes;
