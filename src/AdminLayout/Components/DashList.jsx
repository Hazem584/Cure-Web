import React from "react";
import DashCard from "./DashCard";

const DashList = ({ doctors }) => {
  console.log(doctors);
  return (
    <div className="flex flex-col gap-6">
      {doctors.map((doctor) => (
        <DashCard doctor={doctor} key={doctor.id} />
      ))}
    </div>
  );
};

export default DashList;
