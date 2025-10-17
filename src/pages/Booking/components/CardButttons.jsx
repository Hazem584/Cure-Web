import React from "react";
import { Button } from "@material-tailwind/react";
const CardButttons = ({ status }) => {
  let FirstButton = "";
  let SecondButton = "";
  if (status == "Upcoming") {
    FirstButton = "Cancel";
    SecondButton = "Reschedule";
  } else if (status == "Completed") {
    FirstButton = "Book again";
    SecondButton = "Feedback";
  } else if (status == "Canceled") {
    FirstButton = "Book again";
    SecondButton = "Support";
  }
  return (
    <div className="flex gap-8">
      <button
        className={`border border-[#99A2AB] px-12 py-2 rounded-xl hover:bg-blue-50 transition 
        ${
          status === "Upcoming"
            ? "text-[#99A2AB] bg-[#FFFFFF] hover:bg-blue-400 hover:text-white  transition "
            : "border border-blue-600 text-blue-600 px-11 py-2 rounded-xl hover:bg-blue-50 transition"
        }
            `}
      >
        {FirstButton}
      </button>
      <button className="bg-[#145DB8] text-[#FFFFFF] px-14 py-2 rounded-xl hover:bg-blue-700 transition">
        {SecondButton}
      </button>
    </div>
  );
};

export default CardButttons;
