import React from 'react';
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div className='container'>

            <div className="row mt-1">
                <div className="col">
                    <Link to="classcompo">
                        <h3 className='text-center'>Class Component</h3>
                    </Link>
                    
                </div>
                <div className="col">
                <Link to="functionalcompo">
                    <h3 className='text-center'>Functional Component</h3>
                </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;