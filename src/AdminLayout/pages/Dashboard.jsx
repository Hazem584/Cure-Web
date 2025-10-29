import React, { useState } from "react";
import DashList from "../components/DashList";

import GoCard from "../components/GoCard";
import AddCard from "../components/AddCard";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-8">
      <AddCard />
      <GoCard />
    </div>
  );
};

export default Dashboard;
