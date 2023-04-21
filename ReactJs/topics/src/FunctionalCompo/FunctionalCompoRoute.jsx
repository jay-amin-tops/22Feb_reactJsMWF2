import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import WelcomeToFunctional from './01WelcomeToFunctional.jsx';
import StateInFunctionalCompo from './02StateInFunctionalCompo.jsx';
import PorpsInFunction from './03PorpsInFunction.jsx';

class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="functionalcompointro" element={<WelcomeToFunctional />} />
                        <Route path="stateinfunction" element={<StateInFunctionalCompo />} />
                        <Route path="porpsinfunction" element={<PorpsInFunction />} />
                        
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;