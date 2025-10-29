import React from "react";

const Howitworkcard = ({ title, description, img, id }) => {
     return (
          <div className="card flex flex-col border-2 dark:border-dark-borderDark rounded-[30px] overflow-hidden max-w-[402px] h-[280px]" key={id}>
               <div className="items-center justify-items-center bg-white">
                    <img src={img} className="object-contain w-[90%]" alt="" />
               </div>
               <div className="card-sub p-4">
                    <div className="card-title font-normal text-2xl font-[georgia]">
                         {title}
                    </div>
                    <div className="card-des font-montserrat text-sm text-neutral">
                         {description}
                    </div>
               </div>
          </div>
     );
};

export default Howitworkcard;
