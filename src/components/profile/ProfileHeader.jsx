import React from "react";
import { Avatar, Typography, IconButton } from "@material-tailwind/react";
import { CameraIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center mb-4 mt-2">
      <div className="relative">
        <Avatar
          src="https://i.postimg.cc/hhFXM7tG/ba06b3e7882ffb9e60838270ea0dd9b82b74eda6.jpg"
          alt="Profile"
          size="xl"
         
        />
        <IconButton
          variant="text"
          color="blue-gray"
          className="absolute bottom-0 right-0 bg-white shadow-sm"
        >
          <CameraIcon className="h-4 w-4 text-gray-700" />
        </IconButton>
      </div>

      <Typography variant="h6" className="mt-2 mb-1 leading-tight">
        Seif Mohamed
      </Typography>
      <Typography color="gray" className="flex items-center gap-1 text-xs">
        <MapPinIcon className="h-3 w-3" /> 129, El-Nasr Street, Cairo
      </Typography>
    </div>
  );
};

export default ProfileHeader;
