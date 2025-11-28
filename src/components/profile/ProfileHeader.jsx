import React, { useState } from "react";
import { Avatar, Typography, IconButton } from "@material-tailwind/react";
import { CameraIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ProfileHeader = ({
  name = "Seif Mohamed",
  address = "129, El-Nasr Street, Cairo",
  userId, 
  token, 
}) => {
  const [avatarUrl, setAvatarUrl] = useState(
    "https://i.postimg.cc/hhFXM7tG/ba06b3e7882ffb9e60838270ea0dd9b82b74eda6.jpg"
  );

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAvatarUrl(reader.result);
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/users/update_user/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.data.avatarUrl) {
        setAvatarUrl(`http://localhost:3000${data.data.avatarUrl}`);
      }
    } catch (err) {
      console.error("Error uploading avatar:", err);
    }
  };

  return (
    <div className="flex flex-col items-center mb-4 mt-2">
      <input
        type="file"
        accept="image/*"
        id="avatarInput"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <div className="relative">
        <Avatar src={avatarUrl} alt="Profile" size="xl" className="shadow-md" />
        <IconButton
          variant="text"
          color="blue-gray"
          className="absolute bottom-0 right-0 bg-white shadow-sm"
          onClick={() => document.getElementById("avatarInput").click()}
        >
          <CameraIcon className="h-4 w-4 text-gray-700" />
        </IconButton>
      </div>

      <Typography variant="h6" className="mt-2 mb-1 leading-tight">
        {name}
      </Typography>
      <Typography color="gray" className="flex items-center gap-1 text-xs">
        <MapPinIcon className="h-3 w-3" /> {address}
      </Typography>
    </div>
  );
};

export default ProfileHeader;
