import React, { useEffect, useState } from "react";
import ViewAllBtn from "../components/ViewAllBtn";
import DoctorCardPlaceHolder from "../components/DoctorCardPlaceHolder";
import Card from "../../doctors/components/Card";
import useFetch from "../../../../components/hooks/useFetch";
import { DOCTORS_API_URL } from "../../appointments/apiConfig";
const TopRated = () => {
    const doctersCards = 
    [
        1,2,3,4,5,6
    ]
  const [doctors, setDoctors] = useState([]);
  const {data,loading,error} = useFetch(`${DOCTORS_API_URL}`)

  useEffect(() => {
    if(data?.data && !loading){
    setDoctors(data?.data);
    }
    //console.log(data.data);
    
  },[data,loading])
     return (
          <section className="flex flex-col  gap-6 justify-between items-center px-10">
               <div className="flex flex-col gap-5 sm:flex-row justify-between items-center w-full">
                    <div className="TopRatedHeader flex text-center sm:text-start flex-col gap-4">
                         <div className="flex flex-col gap-4">
                              <div className="heading dark:text-dark-textOnDark font-[georgia] text-3xl">
                                   Top-Rated Doctors Chosen by Patients
                              </div>
                              <div className="subheading font-montserrat font-normal text-neutral dark:text-dark-textSecondary text-[1.2rem] sm:max-w-[684px]">
                                   Explore our highest-rated doctors, trusted by
                                   real patients for their expertise, care, and
                                   service. Book with confidence today.
                              </div>
                         </div>
                    </div>
                    <ViewAllBtn />
               </div>
               <div className="cards-container flex *:flex-shrink-0 gap-4 w-full [box-shadow:inset_0_0_30px_rgba(0,0,0,0.15)] myscroll overflow-x-scroll">
                {error ? (<div className="text-red-500 font-semibold p-4">Something went wrong 😢</div>)
                :
                !loading ? doctors.map((doc,indx)=><Card key={doc._id || doc.id} Doc={doc} />) : doctersCards.map((item,indx)=><DoctorCardPlaceHolder key={indx}/>)}
               </div>
          </section>
     );
};

export default TopRated;
