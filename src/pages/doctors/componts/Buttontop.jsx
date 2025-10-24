

import React, { useState } from "react";
import { FaTooth } from "react-icons/fa";
import { BsLungs } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { LuStethoscope } from "react-icons/lu";
import { GiNoseSide } from "react-icons/gi";
import { GiHeartOrgan } from "react-icons/gi";


import { FaRegEye } from "react-icons/fa";

const Buttontop = () => {
  const [activeButton, setActiveButton] = useState("All");
  
  const Buttons = [
    { name: "Dentist", icon: <FaTooth/> },
    { name: "Cardiologist", icon: <GiHeartOrgan/>},
    { name: "ENT", icon: <GiNoseSide/>},
    { name: "Neurologist", icon:<GiBrain/> },
    { name: "General Practitioner", icon:  <LuStethoscope/> },
    { name: "Ophthalmologist", icon: <FaRegEye/> },
    { name: "Pulr", icon: < BsLungs />}
  ];

  return (
    <div className="flex gap-8 [@media(max-width:639px)]:gap-5 [@media(max-width:639px)]:flex-wrap">
      {Buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => setActiveButton(button.name)}
          className={`border border-blue-gray-300 px-4 py-2 rounded-lg font-small [@media(max-width:639px)]:px-4 flex items-center gap-2 ${
            activeButton === button.name
              ? "bg-[#145DB8] text-white dark:text-dark-textOnDark dark:bg-dark-bgSurface border-2 border-[#145DB8]"
              : "bg-[#FFFFFF] text-[#6D7379] border-[#FFFFFF] dark:bg-dark-darkBg dark:border-2 dark:border-dark-borderDark hover:text-blue-600"
          }`}
        >
          <span className="text-lg">{button.icon}</span>
          <span>{button.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Buttontop;