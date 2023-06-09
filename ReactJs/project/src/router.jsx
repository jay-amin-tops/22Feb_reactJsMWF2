import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import HeaderComp from "./CommonCompo/Header";
import LoginRegisterPage from "./LoginRegisterPage.jsx";
import AccessAPI from "./AccessAPI.jsx";
import Logout from "./Logout.jsx";
// import ExampleCompo from "./ExampleCompo";
// import ClassCompoIntro from "./ClassCompo/01ClassCompoIntro.jsx";
// import ClassCompoMenu from "./ClassCompo/ClassCompoMenu";

const AdminRoute = React.lazy(()=>{ return import('./Admin/AdminRoute.jsx') })
// const FunctionalCompoRoute = React.lazy(()=>{ return import('./FunctionalCompo/FunctionalCompoRoute.jsx') })
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
    }, {
        path: "/api",
        element: <><AccessAPI /></>,
    }, {
        path: "/logout",
        element: <><Logout /></>,
    },{
        path: "admin/*",
        element: <Suspense fallback={<h2>Loading...</h2>}><AdminRoute /></Suspense>,
    }
    // ,{
    //     path: "/examples",
    //     element: <><HeaderComp/><ExampleCompo/></>,
    //     children: [
    //         {
    //           path: "classcompo/*",
    //           element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>,
    //         },{
    //             path: "functionalcompo/*",
    //             element: <Suspense fallback={<h2>Loading...</h2>}><FunctionalCompoRoute/></Suspense>,
    //         }
    //     ]
    // },
]);


export default MainRouter;