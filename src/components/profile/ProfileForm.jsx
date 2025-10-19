import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FloatingInput = ({ icon: Icon, label, type = "text" }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value !== "";

  return (
    <div className="relative w-full mb-6">
      <Icon
        className={`absolute left-3 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${
          active ? "text-blue-500" : "text-gray-400"
        }`}
      />

      <label
        className={`absolute left-10 px-1 bg-white transition-all duration-300 pointer-events-none ${
          active
            ? "text-blue-500 text-sm top-2 translate-y-0"
            : "text-gray-500 top-1/2 -translate-y-[50%]"
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== "")}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full border rounded-lg pl-10 py-3 focus:outline-none text-gray-800 transition-all duration-300 ${
          active ? "border-blue-500 ring-1 ring-blue-300" : "border-gray-300"
        }`}
      />
    </div>
  );
};

const ProfileForm = () => {
  const [phone, setPhone] = useState("");
  const [focusedPhone, setFocusedPhone] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const isPhoneActive = focusedPhone || phone !== "";
  const isBirthdayActive = day || month || year;

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="flex flex-col gap-3 w-full px-4 pb-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Profile Information
      </h2>

      <FloatingInput icon={FaUser} label="Full Name" />

      <FloatingInput icon={FaEnvelope} label="Email Address" type="email" />

      <FloatingInput icon={FaMapMarkerAlt} label="Address" />

      <div className="relative w-full mb-6">
        <label
          className={`absolute left-[85px] px-1 bg-white transition-all duration-300 pointer-events-none ${
            isPhoneActive
              ? "text-blue-500 text-sm top-2 translate-y-0"
              : "text-gray-500 top-1/2 -translate-y-[50%]"
          }`}
        >
          Phone Number
        </label>
        <div
          onFocus={() => setFocusedPhone(true)}
          onBlur={() => setFocusedPhone(false)}
          className={`border rounded-lg transition-all duration-300 ${
            isPhoneActive
              ? "border-blue-500 ring-1 ring-blue-300"
              : "border-gray-300"
          }`}
        >
          <PhoneInput
            country={"eg"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputStyle={{
              width: "100%",
              height: "48px",
              border: "none",
              color: "#000",
              paddingLeft: "40px",
              background: "transparent",
              fontSize: "15px",
            }}
            buttonStyle={{
              border: "none",
              background: "transparent",
              left: "10px",
            }}
            containerStyle={{
              width: "100%",
            }}
          />
        </div>
      </div>

      <div className="relative w-full mb-2">
        <label
          className={`absolute left-2 bg-white px-2 transition-all duration-300 pointer-events-none ${
            isBirthdayActive
              ? "text-blue-500 text-sm top-2"
              : "text-gray-500 top-1/2 -translate-y-[50%]"
          }`}
        >
      
        </label>
        <div className="grid grid-cols-3 gap-3 mt-4">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={`border rounded-lg py-3 px-2 focus:outline-none transition-all duration-300 ${
              day ? "border-blue-500 ring-1 ring-blue-300" : "border-gray-300"
            }`}
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className={`border rounded-lg py-3 px-2 focus:outline-none transition-all duration-300 ${
              month ? "border-blue-500 ring-1 ring-blue-300" : "border-gray-300"
            }`}
          >
            <option value="">Month</option>
            {months.map((m, i) => (
              <option key={i} value={m}>
                {m} 
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`border rounded-lg py-3 px-2 focus:outline-none transition-all duration-300 ${
              year ? "border-blue-500 ring-1 ring-blue-300" : "border-gray-300"
            }`}
          >
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => {
              const y = 2025 - i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <Button color="blue" className="w-full rounded-md mt-4">
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileForm;

