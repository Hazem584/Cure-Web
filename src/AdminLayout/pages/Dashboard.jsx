import React, { useState } from "react";

import GoCard from "../Components/GoCard";
import AddCard from "../Components/AddCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center dark:bg-dark-darkBg items-center min-h-screen gap-8 sm:flex-row">
      <AddCard />
      <GoCard />
    </div>
  );
};

export default Dashboard;
