import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import DashboardClient from "./DashboardClient";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("login"));
  console.log(token);

  return token && token.login === true ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/auth"} replace={true} />
  );
};

export default Dashboard;
