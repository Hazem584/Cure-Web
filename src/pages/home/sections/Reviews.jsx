import React from "react";
import { FaStar } from "react-icons/fa";
const Reviews = () => {
     return (
          <section className="flex flex-col dark:bg-dark-darkBg items-center gap-14 p-10">
               <div className="heading font-[georgia] text-4xl dark:text-dark-textOnDark text-center">
                    Reviews
                    <span className="block">That Speak for Themselves</span>
               </div>
               <div className="testamonials flex flex-col items-center gap-4">
                    <div className="rates flex justify-center gap-1 text-[#F9E000] text-2xl">
                         <FaStar />
                         <FaStar />
                         <FaStar />
                         <FaStar />
                         <FaStar />
                    </div>
                    <div className="subheading sm:w-[368px] text-[1.4rem] text-neutral dark:text-dark-textSecondary text-center mb-10">
                         “Quick and easy booking! I found a great dermatologist
                         near me and booked an appointment in just a few
                         minutes.”
                    </div>
                    <div className="people lg:h-[10.3rem] grid grid-cols-2 md:flex flex-wrap gap-4">
                         <div className="person flex flex-col rounded-full overflow-hidden md:w-[110px] md:h-[110px] aspect-square self-end">
                              <img
                                   src="https://i.postimg.cc/prc4LyfW/590e97a43e4ff2f79bca267259360c133a3725b8.jpg"
                                   className="w-full h-full object-cover"
                                   alt=""
                              />
                         </div>
                         <div className="person rounded-full overflow-hidden md:w-[120px] md:h-[120px] aspect-square self-center">
                              <img
                                   src="https://i.postimg.cc/sxHqg1YV/d7500198ffa6f83b4e593dcda3fb7dabfa30d71c.jpg"
                                   className="w-full h-full object-cover"
                                   alt=""
                              />
                         </div>
                         <div className="person rounded-full overflow-hidden md:w-[150px] md:h-[150px] aspect-square self-start">
                              <img
                                   src="https://i.postimg.cc/Kjpw84Pc/80642f4a4ca703cb9bc6f582e632d173f0c514ef.jpg"
                                   className="w-full h-full object-cover"
                                   alt=""
                              />
                         </div>
                         <div className="person rounded-full overflow-hidden md:w-[120px] md:h-[120px] aspect-square self-center">
                              <img
                                   src="https://i.postimg.cc/HnvRkjwk/630fc79a1529bd59e5fa0f59188ff38a57fc6789.jpg"
                                   className="w-full h-full object-cover"
                                   alt=""
                              />
                         </div>
                         <div className="person rounded-full overflow-hidden md:w-[110px] md:h-[110px] aspect-square self-end">
                              <img
                                   src="https://i.postimg.cc/Bb7kntTv/6a4295e3745c5cf5e510d6492434ad8cae4e0178.jpg"
                                   className="w-full h-full object-cover"
                                   alt=""
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Reviews;
