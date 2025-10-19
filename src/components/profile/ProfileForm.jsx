

import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Date from "../../components/profile/Date"
const FloatingInputWithIcon = ({ label, type = "text", icon: Icon }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <Icon
        className={`absolute left-2 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${
          focused ? "text-blue-500" : "text-gray-400"
        }`}
      />

      <Input
        type={type}
        label={label}
        color="blue"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="pl-10 text-gray-900"
        labelProps={{
    className: "left-0", 
  }}
        crossOrigin={undefined}
      />
    </div>
  );
};

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
