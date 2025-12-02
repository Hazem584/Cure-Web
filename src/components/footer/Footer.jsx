import React from "react";
import { Link  } from "react-router-dom";
import { BsHeartPulse } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
     return (
          <footer className="bg-[#05162C] text-white flex flex-col gap-7 px-5 sm:px-12 pb-5 pt-20">
               <div className="flex justify-between gap-3 flex-col lg:flex-row xl:justify-normal xl:gap-44">
                    <div className="logo flex flex-col gap-6">
                         <div className="flex items-center gap-4">
                              <BsHeartPulse className="h-full text-5xl" />
                              <h2 className="text-3xl">Cure</h2>
                         </div>
                         <div className="felx font-[Georgia] gap-2 sm:w-80">
                              <p>
                                   Cure helps you find trusted doctors, book
                                   appointments, and manage your health—quickly
                                   and easily.
                              </p>
                         </div>
                         <div className="flex gap-5 social">
                              <a
                                   href="https://www.facebook.com"
                                   target="_blank"
                              >
                                   <div className="text-xl border rounded-lg bg-white p-[0.625rem]">
                                        <FaFacebookF className="text-[#145DB8] " />
                                   </div>
                              </a>
                              <a href="https://www.youtube.com" target="_blank">
                                   <div className="text-xl border rounded-lg bg-white p-[0.625rem]">
                                        <FaYoutube className="text-[#FC4B4E]" />
                                   </div>
                              </a>
                              <a
                                   href="https://www.whatsapp.com"
                                   target="_blank"
                              >
                                   <div className="text-xl border rounded-lg bg-white p-[0.625rem]">
                                        <IoLogoWhatsapp className="text-[#4CAF50]" />
                                   </div>
                              </a>
                              <a
                                   href="https://www.linkedin.com"
                                   target="_blank"
                              >
                                   <div className="text-xl border rounded-lg bg-white p-[0.625rem]">
                                   <FaLinkedin className="bg-[#145DB8]" />
                                   
                                   </div>
                              </a>
                         </div>
                    </div>
                    <div className="quick-links flex flex-wrap md:flex-nowrap lg:flex-row gap-[3.125rem]">
                         <div className="flex flex-col gap-6">
                              <h3 className="title font-[Georgia] text-xl">
                                   Customer
                              </h3>
                              <div className="list flex flex-col gap-4 font-medium font-montserrat">
                                   <Link to="/home"><div className="li-item">Home</div></Link>
                                   <Link to="/doctors"><div className="li-item">Doctors</div></Link>
                                 <Link to="/home"><div className="li-item">FAQs</div></Link>
                                  <Link to="/contact-us"><div className="li-item">Contact Us</div></Link>
                              </div>
                         </div>
                         <div className="flex flex-col gap-6">
                              <h3 className="title font-[Georgia] text-xl">
                                   Support
                              </h3>
                              <div className="list flex flex-col gap-4 font-medium font-montserrat">
                                   <Link  to="/">
                                        <div className="li-item">
                                             Help Center
                                        </div>
                                   </Link >
                                   <Link to="/">
                                        <div className="li-item">
                                             How it works
                                        </div>
                                   </Link >
                                   <Link to="/privacy-policy">
                                        <div className="li-item">
                                             Privacy Policy
                                        </div>
                                   </Link >
                                   <Link to="/privacy-policy">
                                        <div className="li-item">
                                             Terms & Conditions
                                        </div>
                                   </Link >
                              </div>
                         </div>
                         <div className="flex flex-col gap-6">
                              <h3 className="title font-[Georgia] text-xl">
                                   Contact Info
                              </h3>
                              <div className="list flex flex-row flex-wrap md:flex-col gap-4 font-medium font-montserrat">
                                   <div className="li-item">
                                        <div className="flex gap-4">
                                             <IoCallOutline className="text-base" />
                                             <div className="info flex flex-col gap-2">
                                                  <p>Phone</p>
                                                  <span className="small-des">
                                                       080 707 555-321
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="li-item">
                                        <div className="flex gap-4">
                                             <CiMail className="text-base" />
                                             <div className="info flex flex-col gap-2">
                                                  <p>Email</p>
                                                  <span className="small-des">
                                                       demo@example.com
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="li-item">
                                        <div className="flex gap-4">
                                             <IoLocationOutline className="text-base" />
                                             <div className="info flex flex-col gap-2">
                                                  <p>Address</p>
                                                  <span className="small-des max-w-[9.625rem]">
                                                       526 Melrose Street, Water
                                                       Mill, 11976 New York
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="flex justify-between text-[0.73rem] font-[Georgia]">
                    <p>@2024 Techvio - All Right Reserved </p>
                    <p>Terms & Condition | Privacy Policy </p>
               </div>
          </footer>
     );
};

export default Footer;
