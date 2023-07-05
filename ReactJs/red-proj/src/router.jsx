import React, { Suspense } from "react";
import { Router, createBrowserRouter } from "react-router-dom";
import HomePage from "./Views/HomePage";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import HeaderComp from "./CommonCompo/Header";
import LoginRegisterPage from "./LoginRegisterPage.jsx";
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp /><HomePage /></>,
    },
    {
        path: "/about",
        element: <><HeaderComp /><AboutPage></AboutPage></>,
    }, {
        path: "/contact",
        element: <><HeaderComp /><ContactPage /></>,
    }, {
        path: "/login",
        element: <><LoginRegisterPage /></>,
    }
]);

export default MainRouter;