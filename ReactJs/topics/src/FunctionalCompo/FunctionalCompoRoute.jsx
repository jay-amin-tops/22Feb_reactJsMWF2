import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import WelcomeToFunctional from './01WelcomeToFunctional.jsx';
import StateInFunctionalCompo from './02StateInFunctionalCompo.jsx';
import PorpsInFunction from './03PorpsInFunction.jsx';
import FunctionalCompoUseEffect from './04FunctionalCompoUseEffect.jsx';
import FunctionalCompoUseLayoutEffect from './05FunctionalCompoUseLayoutEffect.jsx';
import StyledCompoExample from './06StyledCompoExample.jsx';
import FunctionalCompoUseMemo from './07FunctionalCompoUseMemo.jsx';
import FunctionalCompoUseMemoFactorial from './08FunctionalCompoUseMemoFactorial.jsx';
import FunctionalCompoUseCallback from './09FunctionalCompoUseCallback.jsx';
import FunctionalCompoUseContext from './10FunctionalCompoUseContext.jsx';
import FunctionalCompoUseImp from './11FunctionalCompoUseImp.jsx';

class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="functionalcompointro" element={<WelcomeToFunctional />} />
                        <Route path="stateinfunction" element={<StateInFunctionalCompo />} />
                        <Route path="porpsinfunction" element={<PorpsInFunction />} />
                        <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                        <Route path="functionalcompouseelayoutffect" element={<FunctionalCompoUseLayoutEffect />} />
                        <Route path="functionalcompostyledcompo" element={<StyledCompoExample />} />
                        <Route path="functionalcompousememo" element={<FunctionalCompoUseMemo />} />
                        <Route path="functionalcompousememofactorial" element={<FunctionalCompoUseMemoFactorial />} />
                        <Route path="functionalcompousecontext" element={<FunctionalCompoUseContext />} />
                        <Route path="functionalcompousecallback" element={<FunctionalCompoUseCallback />} />
                        <Route path="functionalcompouseimp" element={<FunctionalCompoUseImp />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;