import React,{ Suspense } from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import HeaderComp from "./CommonCompo/Header";
import ExampleCompo from "./ExampleCompo";
import ClassCompoIntro from "./ClassCompo/01ClassCompoIntro.jsx";
import ClassCompoMenu from "./ClassCompo/ClassCompoMenu";

const ClassCompoRoute = React.lazy(()=>{ return import('./ClassCompo/ClassCompoRoute.jsx') })
const FunctionalCompoRoute = React.lazy(()=>{ return import('./FunctionalCompo/FunctionalCompoRoute.jsx') })
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp/><HomePage/></>,
    },
    {
        path: "/about",
        element: <><HeaderComp/><AboutPage></AboutPage></>,
    },
    {
        path: "/contact",
        element: <><HeaderComp/><ContactPage/></>,
    },
    {
        path: "/examples",
        element: <><HeaderComp/><ExampleCompo/></>,
        children: [
            {
              path: "classcompo/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>,
            },{
                path: "functionalcompo/*",
                element: <Suspense fallback={<h2>Loading...</h2>}><FunctionalCompoRoute/></Suspense>,
            }
        ]
    },
]);


export default MainRouter;