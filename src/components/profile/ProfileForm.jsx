
// import React, { useState } from "react";
// import { Input, Button } from "@material-tailwind/react";
// import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Date from "../../components/profile/Date";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const FloatingInputWithIcon = ({
//   label,
//   type = "text",
//   icon: Icon,
//   value,
//   onChange,
//   disabled = false,
//   error,
// }) => {
//   const [focused, setFocused] = useState(false);
//   const hasValue = value && value.length > 0;

//   return (
//     <div className="w-full relative">
//       {hasValue && (
//         <label className="block text-gray-500 mb-1 text-sm font-medium">
//           {label}
//         </label>
//       )}

//       <div className="relative">
//         {!hasValue && Icon && (
//           <Icon
//             className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10 transition-colors duration-300 ${
//               focused ? "text-blue-500" : "text-gray-400"
//             } ${disabled ? "opacity-50" : ""}`}
//           />
//         )}

//         <Input
//           type={type}
//           placeholder={!hasValue ? label : ""}
//           value={value}
//           onChange={onChange}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           disabled={disabled}
//           className={`pl-10 pt-3 pb-2 transition-colors duration-300 ${
//             error ? "border-red-500 focus-visible:ring-red-500" : ""
//           } ${hasValue ? "text-gray-500 placeholder-gray-400" : "text-black"}`}
//         />
//       </div>

//       {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
//     </div>
//   );
// };

// const ProfileForm = () => {
//   const [fullName, setFullName] = useState("Seif Mohamed");
//   const [email, setEmail] = useState("seif Mohamed22@gmail.com");
//   const [address, setAddress] = useState("129, El-Nasr Street, Cairo");
//   const [phone, setPhone] = useState("201234567890");
//   const [focusedPhone, setFocusedPhone] = useState(false);
//   const isPhoneActive = focusedPhone || phone !== "";

//   const handleEdit = () => {
//     toast.success("Profile updated!", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };

//   return (
//     <div className="flex flex-col gap-3 w-full pb-6">
//       <FloatingInputWithIcon
//         icon={FaUser}
//         label="Full Name"
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//       />
//       <FloatingInputWithIcon
//         icon={FaEnvelope}
//         label="Email Address"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <FloatingInputWithIcon
//         icon={FaMapMarkerAlt}
//         label="Address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />

//       <div className="relative w-full mb-6">
//         {phone && (
//           <label className="block text-gray-500 mb-1 text-sm font-medium">
//             Phone Number
//           </label>
//         )}

//         <div
//           onFocus={() => setFocusedPhone(true)}
//           onBlur={() => setFocusedPhone(false)}
//           className={`border rounded-lg transition-all duration-300 ${
//             isPhoneActive
//               ? "border-blue-500 ring-1 ring-blue-300"
//               : "border-gray-300"
//           }`}
//         >
//           <PhoneInput
//             country={"eg"}
//             value={phone}
//             onChange={(value) => setPhone(value)}
//             inputStyle={{
//               width: "100%",
//               height: "48px",
//               border: "none",
//               color: "#555",
//               paddingLeft: "40px",
//               background: "transparent",
//               fontSize: "15px",
//             }}
//             buttonStyle={{
//               border: "none",
//               background: "transparent",
//               left: "10px",
//             }}
//             containerStyle={{
//               width: "100%",
//             }}
//           />
//         </div>
//       </div>

//       <Date />

//       <Button
//         onClick={handleEdit}
//         className="w-full rounded-md mt-4 bg-blue-900"
//       >
//         Edit Profile
//       </Button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default ProfileForm;
     



import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Date from "../../components/profile/Date";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FloatingInputWithIcon = ({
  label,
  type = "text",
  icon: Icon,
  value,
  onChange,
  disabled = false,
  error,
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="w-full relative">
      {hasValue && (
        <label className="block text-gray-500 mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        {!hasValue && Icon && (
          <Icon
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10 transition-colors duration-300 ${
              focused ? "text-blue-500" : "text-gray-400"
            } ${disabled ? "opacity-50" : ""}`}
          />
        )}

        <Input
          type={type}
          placeholder={!hasValue ? label : ""}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          className={`pl-10 pt-3 pb-2 transition-colors duration-300 ${
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          } ${hasValue ? "text-gray-500 placeholder-gray-400" : "text-black"}`}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

const ProfileForm = () => {
  const [fullName, setFullName] = useState("Seif Mohamed");
  const [email, setEmail] = useState("seifMohamed22@gmail.com");
  const [address, setAddress] = useState("129, El-Nasr Street, Cairo");
  const [phone, setPhone] = useState("201234567890");
  const [focusedPhone, setFocusedPhone] = useState(false);
  const isPhoneActive = focusedPhone || phone !== "";

  const handleEdit = () => {
    if (!fullName || !email || !address || !phone) {
      toast.error("Please fill all fields!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    toast.success("Profile updated!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="flex flex-col gap-3 w-full pb-6">
      <FloatingInputWithIcon
        icon={FaUser}
        label="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <FloatingInputWithIcon
        icon={FaEnvelope}
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FloatingInputWithIcon
        icon={FaMapMarkerAlt}
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div className="relative w-full mb-6">
        {phone && (
          <label className="block text-gray-500 mb-1 text-sm font-medium">
            Phone Number
          </label>
        )}

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
              color: "#555",
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

      <Date />

      <Button
        onClick={handleEdit}
        className="w-full rounded-md mt-4 bg-blue-900"
      >
        Edit Profile
      </Button>

      <ToastContainer />
    </div>
  );
};

export default ProfileForm;
