import React from "react";
import Card from "./Card";
const List = ({ Doctors }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {Doctors.map((Doctor) => (
        <Card Doctor={Doctor} key={Doctor.id} />
      ))}
    </div>
  );
};

export default List;
