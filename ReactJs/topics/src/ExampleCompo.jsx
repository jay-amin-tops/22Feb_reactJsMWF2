import React from 'react';
import {Link,Outlet} from "react-router-dom";
import ClassAndFunctionCompo from "./ClassAndFunctionalCompo";

const HomePage = () => {
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col">
                    <h2 className='text-center'>Example Component</h2>
                </div>
            </div>
            <ClassAndFunctionCompo/>
            {/* <div className="row mt-1">
                <div className="col">
                <h3 className='text-center'>Class Component</h3>
                <ul>
                    <li>
                        <Link to="introclasscompo">Class Compo Intro</Link>
                    </li>
                </ul>
                </div>
                <div className="col">
                <h3 className='text-center'>Functional Component</h3>
               
                </div>
            </div>

            <div className="row">
                <div className="col">
                <Outlet />
                </div>
            </div> */}
        </div>
    );
};

export default HomePage;