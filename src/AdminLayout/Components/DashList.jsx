import React from "react";
import DashCards from "./DashCards";
const DashList = ({ doctors }) => {
  return (
    <div className="flex justify-center dark:bg-dark-darkBg">
      <div className="flex flex-col gap-6 w-10/12">
        {doctors.map((doctor) => (
          <DashCards doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
};

export default DashList;
