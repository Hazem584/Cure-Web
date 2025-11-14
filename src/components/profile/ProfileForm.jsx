
import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Date from "../../components/profile/Date";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

const getApiBaseUrl = () => {
  const base = import.meta.env.VITE_API_BASE_URL;
  return base.endsWith("/") ? base : `${base}/`;
};

const API_BASE_URL = getApiBaseUrl();

const getAuthToken = () => {
  if (typeof window === "undefined") return null;
  return (
    window.localStorage.getItem("cure_token") ||
    window.localStorage.getItem("token") ||
    window.localStorage.getItem("authToken") ||
    null
  );
};
const getOneUser = async (id) => {
  const token = getAuthToken()

  try {
    const { data } = await axios.get(
      `${API_BASE_URL}user/get_one_user/${id}`,
      {
        headers: {
          Authorization: {token},
        },
      }
    );

    return data

  } catch (err) {
    console.log(err)
        Swal.fire({
          icon: "error",
          title: `${err.response ? err.response.status : "Network Error"}`,
          text:
            err.response?.data?.message || "Network error. Check URL or server",
        });
  }
};
const handleUpdateUser = async (id) => {
  const token = getAuthToken();

  try {
    const { data } = await axios.post(`${API_BASE_URL}user/update_user/${id}`, {
      headers: {
        Authorization: { token },
      },
      body:{
        name:"MA",
        email:"m@gmail.com"
      },
    });

    return data;
  } catch (err) {
    console.log(err);
    return err
  }
};
const handleDeleteAccount = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    html: `
      <p class="mb-2">To confirm, type:</p>
      <b>I WANT TO DELETE ACCOUNT</b>
    `,
    input: "text",
    inputPlaceholder: "Type the phrase here...",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#d33",
    preConfirm: (value) => {
      if (value !== "I WANT TO DELETE ACCOUNT") {
        Swal.showValidationMessage("You must type the exact phrase!");
        return false;
      }
      return true;
    },
  });

  if (!result.isConfirmed) return;

  try {
    const token = getAuthToken()

    const response = await axios.post(`${API_BASE_URL}user/delete_user/${id}`, {
      headers: {
        Authorization: { token },
      },
    });

    Swal.fire({
      icon: "success",
      title: "Account Deleted",
      text: "Your account has been permanently deleted.",
    });
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: err.response?.data?.message || "Something went wrong!",
    });
  }
};
const ProfileForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("seifMohamed22@gmail.com");
  const [address, setAddress] = useState("129, El-Nasr Street, Cairo");
  const [phone, setPhone] = useState("201234567890");
  const [age, setAge] = useState(0);
  const [focusedPhone, setFocusedPhone] = useState(false);
  const isPhoneActive = focusedPhone || phone !== "";
  const [userData,setUserData] = useState("")

  useEffect(()=>{
      setUserData(getOneUser("6914960bd7fa7d80b92963e9"))
  },[])
  const handleEdit = async (id) => {
    if(editMode){
      if (!fullName || !email || !address || !phone || !age) {
        toast.error("Please fill all fields!", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      } else if (age < 18 || phone.length == 11){
        toast.error("Please  Enter valid Inputs!", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }
      
      const err = await handleUpdateUser(id)
      if(!err){
      setEditMode(false);
        toast.success("Profile updated!", {
          position: "top-right",
          autoClose: 3000,
        });
      }else{
        console.log("NOT EDITED");
        Swal.fire({
          icon: "error",
          title: `${err.response ? err.response.status : "Network Error"}`,
          text:
            err.response?.data?.message ||
            "Network error. Check URL or server",
        });
        return
      }
    }else return
  };
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="flex flex-col gap-3 w-full pb-6">
      <FloatingInputWithIcon
        icon={FaUser}
        label="Full Name"
        value={fullName}
        disabled={!editMode}
        onChange={(e) => setFullName(e.target.value)}
      />
      <FloatingInputWithIcon
        icon={FaEnvelope}
        label="Email Address"
        type="email"
        value={email}
        disabled={!editMode}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FloatingInputWithIcon
        icon={FaMapMarkerAlt}
        label="Address"
        value={address}
        disabled={!editMode}
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
            isPhoneActive && editMode
              ? "border-blue-500 ring-1 ring-blue-300"
              : "border-gray-300"
          }`}
        >
          <PhoneInput
            country={"eg"}
            value={phone}
            disabled={!editMode}
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

      <div className="w-72">
        <Input label="Age" value={age} onChange={(e)=>setAge(Number(e.target.value))} type="number" disabled={!editMode} />
      </div>

      <Button
        onClick={()=>{setEditMode(true);handleEdit();}}
        className={`w-full rounded-md mt-4  ${editMode ? "bg-green-600":"bg-blue-900"}`}
      >
        {editMode ? "Save" : "Edit Profile"}
      </Button>
            <Button className="bg-red-500" onClick={()=>handleDeleteAccount()}>
              Delete Account
            </Button>
      <ToastContainer />
    </div>
  );
};

export default ProfileForm;
