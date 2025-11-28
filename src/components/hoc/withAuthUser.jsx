import React from "react";
import { Navigate } from "react-router-dom";

const withAuthUser = (WrappedComponent) => {
  return (props) => {
    const user = JSON.parse(localStorage.getItem("user")); 
    console.log("User from localStorage:", user); 

    if (!user) {
      return <Navigate to="/signin" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthUser;
