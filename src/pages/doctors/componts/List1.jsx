import React from "react";
import Cards from "./cards";

const List1 = ({ Doctor }) => {
  return (
    <div
      className="grid grid-cols-3 gap-3 mt-4 mb-11 
        [@media(max-width:719px)]:grid-cols-1 
        [@media(max-width:639px)]:items-center 
        [@media(max-width:639px)]:justify-center 
        [@media(max-width:1020px)]:grid-cols-2 "
    >
      {Doctor.map((doc) => (
        <Cards key={doc.id} Doc={doc} />
      ))}
    </div>
  );
};

export default List1;
