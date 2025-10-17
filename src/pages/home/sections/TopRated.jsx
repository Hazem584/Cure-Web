import React from "react";
import ViewAllBtn from "../components/ViewAllBtn";
import DoctorCardPlaceHolder from "../components/DoctorCardPlaceHolder";
const TopRated = () => {
    const doctersCards = 
    [
        1,2,3,4,5,6
    ]
     return (
          <section className="flex flex-col gap-6 justify-between items-center px-10">
               <div className="flex justify-between items-center w-full">
                    <div className="TopRatedHeader flex flex-col gap-4">
                         <div>
                              <div className="heading font-[georgia] text-3xl">
                                   Top-Rated Doctors Chosen by Patients
                              </div>
                              <div className="subheading font-montserrat font-normal text-neutral text-[1.2rem] sm:max-w-[684px]">
                                   Explore our highest-rated doctors, trusted by
                                   real patients for their expertise, care, and
                                   service. Book with confidence today.
                              </div>
                         </div>
                    </div>
                    <ViewAllBtn />
               </div>
               <div className="cards-container flex gap-4 w-full [box-shadow:inset_0_0_30px_rgba(0,0,0,0.15)] overflow-scroll">
                {doctersCards.map((item,indx)=><DoctorCardPlaceHolder key={indx}/>)}
               </div>
          </section>
     );
};

export default TopRated;
