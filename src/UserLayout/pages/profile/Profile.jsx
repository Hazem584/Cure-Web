
import React from "react";
import { Card } from "@material-tailwind/react";
import ProfileHeader from "../../../components/profile/ProfileHeader";
import ProfileForm from "../../../components/profile/ProfileForm";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/header/NavBar";
import withAuthUser from "../../../components/hoc/withAuthUser";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div>
        <NavBar />
      </div>
      <div className="flex-grow flex justify-center items-center pt-10 pb-10">
        <Card className="w-full max-w-xl p-10 shadow-md">
          <ProfileForm />
        </Card>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

const ProtectedProfile = withAuthUser(Profile);

export default ProtectedProfile;
