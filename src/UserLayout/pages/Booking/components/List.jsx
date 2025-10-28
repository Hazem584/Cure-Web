import React from "react";
import Card from "./Card";
const List = ({ Doctors }) => {
  return (
    <div
      className="grid grid-cols-3 gap-6 mt-4 mb-11 [@media(max-width:719px)]:grid-cols-1 [@media(max-width:639px)]:items-center [@media(max-width:639px)]:justify-center 
      
    [@media(max-width:1020px)]:grid-cols-2 "
    >
      {Doctors.map((Doctor) => (
        <Card Doctor={Doctor} key={Doctor.id} />
      ))}
    </div>
  );
};

export default List;
