import React from "react";
import DashCards from "./DashCards";
const DashList = ({ doctors, refetch }) => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-6 w-10/12">
        {doctors.map((doctor) => (
          <DashCards doctor={doctor} key={doctor._id} />
        ))}
      </div>
    </div>
  );
};

export default DashList;
