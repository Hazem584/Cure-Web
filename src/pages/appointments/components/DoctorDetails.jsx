import React, { useState } from "react";
import { FaUserFriends, FaStar, FaCommentDots } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
const stats = [
  {
    label: "patients",
    value: "2,000+",
    icon: FaUserFriends,
  },
  {
    label: "experience",
    value: "10+",
    icon: PiMedalFill,
  },
  {
    label: "rating",
    value: "4.5",
    icon: FaStar,
  },
  {
    label: "reviews",
    value: "1,872",
    icon: TiMessages,
  },
];
const aboutMeIntro =
  "Dr. Jessica Turner, a board-certified Pulmonologist with over 8 years of experience in diagnosing and treating a wide range of respiratory conditions, is dedicated to providing patient-centered care.";

const aboutMeDetails =
  " She completed her residency at the University of California Medical Center and leads several clinical research initiatives focused on asthma and chronic obstructive pulmonary disease (COPD). Dr. Turner believes in empowering patients through education, offering personalized treatment plans, and collaborating closely with multidisciplinary teams to ensure comprehensive respiratory wellness.";

const DoctorDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <aside className={`w-full space-y-6 lg:w-80 xl:w-[540px] `}>
      <section className="space-y-6 rounded-3xl bg-[#F5F6F7] p-6 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="relative -mt-1 flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 p-1 shadow-sm">
            <img
              src="assets/doctor.png"
              alt="Dr. Jessica Turner profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="text-xl font-semibold text-slate-900">
              Dr. Jessica Turner
            </h3>
            <p className="text-sm font-medium text-slate-500">Pulmonologist</p>
          </div>
        </div>

        <div className="flex justify-between text-center text-sm text-slate-500">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex-1 space-y-2 rounded-2xl">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Icon size={28} />
              </span>
              <p className="text-lg font-semibold text-slate-900">{value}</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 text-left">
          <h4 className="text-sm font-semibold text-slate-600">About me</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            {aboutMeIntro}
            {isExpanded ? aboutMeDetails : "..."}
          </p>
          {!isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="text-sm font-semibold text-blue-500 transition hover:text-blue-600"
            >
              Read more
            </button>
          )}
        </div>
        <section className="space-y-4 ">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Location</h4>
            <p className="mt-1 text-sm text-slate-500">
              129, El-Nasr Street, Cairo, Egypt
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="assets/GoogleMapTA (1) 1.png"
              alt="Clinic location map"
              className="h-48 w-full object-cover"
            />
          </div>
        </section>
      </section>
    </aside>
  );
};

export default DoctorDetails;
