import React, { useState } from "react";

const Buttons = () => {
  const [activeButton, setActiveButton] = useState("All");
  const Buttons = ["All", "Upcoming", "Completed", "Canceled"];
  return (
    <div className="flex gap-8">
      {Buttons.map((ButtonValue, index) => (
        <button
          key={index}
          onClick={() => setActiveButton(ButtonValue)}
          className={`px-5 py-2 rounded-lg font-small  
            ${
              activeButton === ButtonValue
                ? "bg-[#145DB8] text-white border-[#145DB8] "
                : "bg-[#FFFFFF] text-[#6D7379] border-[#FFFFFF]  hover:text-blue-600"
            }`}
        >
          {ButtonValue}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
