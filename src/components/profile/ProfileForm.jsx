

import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Date from "../../components/profile/Date"
const FloatingInputWithIcon = ({
  label,
  type = "text",
  icon: Icon,
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
}) => {
  const [focused, setFocused] = useState(false)
  const hasValue = value && value.length > 0

  return (
    <div className="w-full">
      <div className="relative">
        <Icon
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10 transition-colors duration-300 ${
            focused ? "text-blue-500" : "text-gray-400"
          } ${disabled ? "opacity-50" : ""}`}
        />

        <Input
          type={type}
          placeholder={placeholder || " "}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          className={`pl-10 pt-6 pb-2 peer transition-colors duration-300 ${
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
          crossOrigin={undefined}
        />

        <label
          className={`absolute transition-all duration-300 pointer-events-none z-20 bg-white px-1 flex items-center gap-1 ${
            focused || hasValue
              ? "top-0 -translate-y-1/2 left-3 text-xs font-medium text-blue-500 flex items-center gap-1"
              : "top-1/2 -translate-y-1/2 left-10 text-base text-gray-500"
          } ${disabled ? "opacity-50" : ""}`}
        >
          {label}
        </label>
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
const ProfileForm = () => {
  const [phone, setPhone] = useState("");
  const [focusedPhone, setFocusedPhone] = useState(false);
  const isPhoneActive = focusedPhone || phone !== "";


  return (
    <div className="flex flex-col gap-3 w-full  pb-6">
      <FloatingInputWithIcon icon={FaUser} label="Full Name" />
      <FloatingInputWithIcon icon={FaEnvelope} label="Email Address" type="email" />
      <FloatingInputWithIcon icon={FaMapMarkerAlt} label="Address" />

      <div className="relative w-full mb-6">
        <label
          className={`absolute left-[80px] px-1 bg-white transition-all duration-300 ease-in-out pointer-events-none ${
            isPhoneActive
              ? "text-blue-500 text-sm top-0 translate-y-[-50%] scale-90"
              : "text-gray-500 top-1/2 -translate-y-[50%] scale-100"
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

<Date/>
      <Button className="w-full rounded-md mt-4 bg-blue-900">
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileForm;
