import React from "react";
import FaqsAccordion from "../components/FaqsAccordion";
const FAQs = () => {
     return (
          <section className="flex flex-col items-center gap-12 justify-center">
               <div className="flex flex-col  gap-6 items-center font-normal">
                    <button className="flex items-center py-1 px-2 text-primary dark:text-dark-textPrimary bg-[#E8EFF8] dark:bg-dark-bgSurface rounded-3xl text-[0.85rem]">
                         Frequently Asked Questions
                    </button>
                    <div className="flex flex-col gap-6 items-center text-center">
                         <h1 className="heading text-5xl font-[georgia] text-secondry dark:text-dark-textOnDark">
                              Got Questions ? We’ve got Answers!
                         </h1>
                    </div>
               </div>
               <div className="flex flex-col w-2/3 ">
                    <FaqsAccordion />
               </div>
          </section>
     );
};

export default FAQs;
