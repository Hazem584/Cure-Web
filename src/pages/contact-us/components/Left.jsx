import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { BiPhoneCall } from "react-icons/bi";
const Left = () => {
  return (
    <div className="subheading text-neutral dark:text-dark-textSecondary [@media(max-width:900px)]:font-normal text-[1.3rem] mb-20">
          <div className=" w-auto h-auto overflow-hidden   ">
              <div >
              <h1 className='font-serif text-4xl pb-5 '>Contact Us</h1>
              <p className='pb-3'>
                  we are committed to processing the<br/> inforamtion 
                  in order to Contact you <br /> and talk about your questions
                  </p>
                  <div className='flex flex-row pb-3 pt-3'>

                  <BiPhoneCall className='pr-2 text-3xl text-blue-400 h-[15%]'/>
                  <p >080 707 555-321</p>
                  </div >
                  <div className='flex flex-row pb-3 pt-3 h-[15%] '>
             <TfiEmail className='pr-2 text-3xl text-blue-400 ' />
             <p className='pt-1'>demo@example.com</p>

                  </div>
               <div className='flex flex-row pb-3 pt-3 '>
               <SlLocationPin  className='pr-2 text-3xl text-blue-400'/>
               <p >526 Melrose Street, Water Mill, 11976 <br />New York</p>
              </div>
      
            
          </div>
          </div>

    </div>
  )
}

export default Left
