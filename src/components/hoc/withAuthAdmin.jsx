import React from "react";
import { Navigate } from "react-router-dom";

const withAuthAdmin = (WrappedComponent) => {
  return (props) => {
    const user = JSON.parse(localStorage.getItem("admin-cure"));

    if (!user) {
      return <Navigate to="/signin" replace />;
    }

    if (user.role !== "admin") {
      return <Navigate to="/" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthAdmin;
