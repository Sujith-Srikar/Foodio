import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menu from "pages/Menu";
import Reservation from "pages/Reservation";
import Homepage from "pages/Homepage";
import AboutUS from "pages/AboutUs/AboutUS";
import CancelReservation from "modals/CancelReservation/CancelReservation";
import Login from "pages/Login/Login";
import Signup from "pages/SignUp/Signup";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "reservation",
      element: <Reservation />,
    },
    {
      path: "aboutus",
      element: <AboutUS />,
    },
    {
      path: "cancel",
      element: <CancelReservation />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
