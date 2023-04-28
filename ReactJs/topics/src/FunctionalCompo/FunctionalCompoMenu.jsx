
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ul>
                        <li><Link to="functionalcompointro">Functional Compo Intro</Link></li>
                        <li><Link to="stateinfunction">State in Functional Compo</Link></li>
                        <li><Link to="functionalcompouseeffect">Functional Compo UseEffect</Link></li>
                        <li><Link to="functionalcompouseelayoutffect">Functional Compo UseLayoutEffect</Link></li>
                        <li><Link to="functionalcompostyledcompo">StyledCompo</Link></li>
                        <li><Link to="functionalcompousememo">UseMemo</Link></li>
                        <li><Link to="functionalcompousememofactorial">UseMemo Factorial Example</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">

                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;