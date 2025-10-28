import React from "react";
import Map from "../components/Map";
import SearchByLoactaionBtn from "../components/SearchByLoactaionBtn";
const MapSection = () => {
     return (
          <section className="grid lg:grid-cols-2 gap-4 justify-items-center justify-center items-center py-10">
               <div className="flex flex-col gap-4  text-center items-center sm:text-start sm:items-start">
                    <div className="sectionheading text-4xl dark:text-dark-textOnDark font-[georgia] sm:max-w-[390px] text-secondry">
                         Find Care Near You in Seconds
                    </div>
                    <div className="subheading text-neutral dark:text-dark-textSecondary font-normal text-[1.3rem] sm:max-w-[451px]">
                         Allow location access or choose your city to instantly
                         discover trusted doctors and clinics around you—quick,
                         easy, and local.
                    </div>
                    <SearchByLoactaionBtn />
               </div>
               <div className="map rounded-[40px] overflow-hidden w-[90%] sm:w-full h-[400px] md:h-[530px] lg:max-w-[550px]">
                    <Map />
               </div>
          </section>
     );
};

export default MapSection;
