import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaImagePortrait } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import { DELETE_USER_URL, GET_USER_URL,UPDATE_USER_URL } from "../../UserLayout/pages/appointments/apiConfig";
import { getAuthToken } from "../../UserLayout/pages/appointments/utils/auth";
import Loading from "../Loading/Loading";
import { useLocation } from "react-router-dom";
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
     const hasValue =
          value !== undefined && value !== null && String(value).length > 0;

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
                         value={value ?? ""}
                         onChange={onChange}
                         onFocus={() => setFocused(true)}
                         onBlur={() => setFocused(false)}
                         disabled={disabled}
                         className={`pl-10 pt-3 pb-2 dark:bg-dark-bgSurface dark:border-dark-borderDark transition-colors duration-300 ${
                              error
                                   ? "border-red-500 focus-visible:ring-red-500"
                                   : ""
                         } ${
                              hasValue
                                   ? "text-gray-500 placeholder-gray-400"
                                   : "text-black"
                         }`}
                    />
               </div>
               {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
     );
};

const getOneUser = async () => {
     try {
          const { data } = await axios.get(GET_USER_URL, {
               headers: {
                    Authorization: getAuthToken(),
               },
          });

          return data;
     } catch (err) {
          Swal.fire({
               icon: "error",
               title: `${err.response ? err.response.status : "Network Error"}`,
               text:
                    err.response?.data?.message ||
                    "Network error. Check URL or server",
          });
     }
};

const handleUpdateUser = async (updatedData) => {
     try {
          const res = await axios.put(
               UPDATE_USER_URL,
               updatedData,
               {
                    headers: {
                         Authorization: getAuthToken(),
                    },
               }
          );
          return res.data
     } catch (err) {
          console.log(err);
          return err;
     }
};


// to logout when delete account
     const handleLogOut = () => {
          localStorage.removeItem("user");
          // remove token also and navigate refresh
          localStorage.removeItem("token");
          // ---
          localStorage.removeItem("admin-cure");

          window.location.reload();
     };
// ---------------------
const handleDeleteAccount = async () => {
     const result = await Swal.fire({
          title: "Are you sure?",
          html: `<p class="mb-2">To confirm, type:</p><b>I WANT TO DELETE ACCOUNT</b>`,
          input: "text",
          inputPlaceholder: "Type the phrase here...",
          showCancelButton: true,
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#d33",
          preConfirm: (value) => {
               if (value !== "I WANT TO DELETE ACCOUNT") {
                    Swal.showValidationMessage(
                         "You must type the exact phrase!"
                    );
                    return false;
               }
               return true;
          },
     });

     if (!result.isConfirmed) return;

     try {
          
          await axios.get(DELETE_USER_URL, {
               headers: { Authorization: getAuthToken() },
          });
          handleLogOut()
          useLocation("/")
     } catch (err) {
          Swal.fire({
               icon: "error",
               title: "Error",
               text: err.response?.data?.message || "Something went wrong!",
          });
     }
};

const ProfileForm = () => {
     const [userInfo, setUserInfo] = useState({
          avatarUrl:
               "https://i.postimg.cc/0yZR6x8X/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg",
          name: "",
          email: "",
          phone: "",
          age: 0,
          address: "",
     });
     const [focusedPhone, setFocusedPhone] = useState(false);
     const isPhoneActive = focusedPhone || userInfo.phone !== "";
     const [editMode, setEditMode] = useState(false);
     const [userLoading, setUserLoading] = useState(false);

     useEffect(() => {
          fetchUser();
     }, []);

     const fetchUser = async () => {
          setUserLoading(true);
          const data = await getOneUser();
          if (data) {
               //console.log(data);
               setUserInfo((prev) => ({
                    ...prev,
                    ...data.data,
               }));
          }
          setUserLoading(false);
          return data;
     };
     const handleEdit = async () => {
          if (
               !userInfo.name ||
               !userInfo.email ||
               !userInfo.address ||
               !userInfo.phone ||
               !userInfo.age
          ) {
               toast.error("Please fill all fields!", {
                    position: "top-right",
                    autoClose: 3000,
               });
               return;
          }
          if (userInfo.age < 18) {
               toast.error("Please enter valid inputs! age > 18", {
                    position: "top-right",
                    autoClose: 3000,
               })
               return;
          }
          else if(userInfo.phone.length < 11){
               toast.error("Please enter valid phone number", {
                    position: "top-right",
                    autoClose: 3000,
               });
               return
          }
          setUserLoading(true)
          //console.log("user",userInfo);
          const err = await handleUpdateUser(userInfo);
          setUserLoading(false)

          if (!err.response) {
               setEditMode(false);
               toast.success("Profile updated!", {
                    position: "top-right",
                    autoClose: 3000,
               });
          } else {
               Swal.fire({
                    icon: "error",
                    title: `${
                         err.response ? err.response.status : "Network Error"
                    }`,
                    text:
                         err.response?.data?.message ||
                         "Network error. Check URL or server",
               });
          }
     };

     return (
          <>
          {userLoading ?
               (<div className="fixed inset-0 z-[100] flex justify-center items-center bg-white/60 w-[100vw] h-[100vh]">
                    <Loading />
               </div>)
               :
               ""
               }
               <ProfileHeader
                    avatarUrl={userInfo.avatarUrl}
                    name={userInfo.name}
                    address={userInfo.address}
               />
               <div className="flex flex-col gap-3 w-full pb-6">
                    <FloatingInputWithIcon
                         icon={FaUser}
                         label="Full Name"
                         value={userInfo.name}
                         disabled={!editMode}
                         onChange={(e) =>
                              setUserInfo({ ...userInfo, name: e.target.value })
                         }
                    />
                    <FloatingInputWithIcon
                         icon={FaImagePortrait}
                         label="Avatar"
                         value={userInfo.avatarUrl}
                         placeholder="https://..."
                         disabled={!editMode}
                         onChange={(e) =>
                              setUserInfo({
                                   ...userInfo,
                                   avatarUrl: e.target.value,
                              })
                         }
                    />
                    <FloatingInputWithIcon
                         icon={FaEnvelope}
                         label="Email Address"
                         type="email"
                         value={userInfo.email}
                         disabled={!editMode}
                         onChange={(e) =>
                              setUserInfo({
                                   ...userInfo,
                                   email: e.target.value,
                              })
                         }
                    />
                    <FloatingInputWithIcon
                         icon={FaMapMarkerAlt}
                         label="Address"
                         value={userInfo.address}
                         disabled={!editMode}
                         onChange={(e) =>
                              setUserInfo({
                                   ...userInfo,
                                   address: e.target.value,
                              })
                         }
                    />

                    <div className="relative w-full mb-6">
                         {userInfo.phone && (
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
                                   value={userInfo.phone}
                                   disabled={!editMode}
                                   onChange={(val) =>
                                        setUserInfo((prev) => ({
                                             ...prev,
                                             phone: val,
                                        }))
                                   }
                                   inputStyle={{
                                        width: "100%",
                                        height: "48px",
                                        border: "none",
                                        color: "",
                                        paddingLeft: "40px",
                                        background: "transparent",
                                        fontSize: "15px",
                                   }}
                                   buttonStyle={{
                                        border: "none",
                                        background: "transparent",
                                        left: "10px",
                                   }}
                                   containerStyle={{ width: "100%" }}
                              />
                         </div>
                    </div>

                    <div className="w-72">
                         <Input
                              label="Age"
                              value={userInfo.age}
                              onChange={(e) =>
                                   setUserInfo({
                                        ...userInfo,
                                        age: Number(e.target.value),
                                   })
                              }
                              type="number"
                              disabled={!editMode}
                         />
                    </div>

                    <Button
                         className={`w-full rounded-md mt-4 ${
                              editMode ? "bg-green-600" : "bg-blue-900"
                         }`}
                         onClick={() =>
                              editMode ? handleEdit() : setEditMode(true)
                         }
                    >
                         {editMode ? "Save" : "Edit Profile"}
                    </Button>

                    <Button
                         className="bg-red-500 mt-2"
                         onClick={() =>
                              handleDeleteAccount()
                         }
                    >
                         Delete Account
                    </Button>

                    <ToastContainer />
               </div>
          </>
     );
};

export default ProfileForm;
