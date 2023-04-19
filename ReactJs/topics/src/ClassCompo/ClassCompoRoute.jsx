import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import WelcomeToClassCompo from './01WelcomeToClassCompo.jsx';
import ClassCompoConstructor from './02ClassCompoConstructor.jsx';
import ClassCompoState from './03ClassCompoState.jsx';
import ClassCompojsx from './04ClassCompojsx.jsx';
import ProspExample from './05Props';
import StateLifeCycle from './07statelifecycle';
import ClassCompoLoader from './08statelifecycleloader';
import ClassCompoConditionalRender from './10ConditionalRendering';
import ClassCompoListKeysMap from './11ListKeysMap';
import ClassCompoDynamicMenu from './12DynamicSubMenu';
import ClassCompoSpreadRest from './13ClassCompoSpreadRest.jsx';
import ClassCompoControlledCompo from './14ClassCompoControlledCompo.jsx';
import ClassCompoUnControlledCompo from './15ClassCompoUnControlledCompo';
import ClassCompoCompositionVsInheritance from './16ClassCompoCompositionVsInheritance.jsx';
import ClassCompoStateLifting from './18ClassCompoStateLifting/mainfile.jsx';
import ClassCompoHOC from './19HOC_in_classCompo/mainCompo';
import ClassCompoAPI from './20FetchAPI';

class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                        <Route path="classcompoconstructor" element={<ClassCompoConstructor />} />
                        <Route path="classcompostate" element={<ClassCompoState />} />
                        <Route path="classcompojsx" element={<ClassCompojsx />} />
                        <Route path="classcompoporps" element={<ProspExample />} />
                        <Route path="classcompostatelifecycle" element={<StateLifeCycle />} />
                        <Route path="classcompostatelifecycleloader" element={<ClassCompoLoader />} />
                        <Route path="classcompoconditionalrender" element={<ClassCompoConditionalRender />} />
                        <Route path="classcompolistkeysmap" element={<ClassCompoListKeysMap />} />
                        <Route path="classcompodynamicmenu" element={<ClassCompoDynamicMenu />} />
                        <Route path="classcomporestspread" element={<ClassCompoSpreadRest />} />
                        <Route path="classcompocontrolledcompo" element={<ClassCompoControlledCompo />} />
                        <Route path="classcompouncontrolledcompo" element={<ClassCompoUnControlledCompo />} />
                        <Route path="classcompocompositionvsinheritance" element={<ClassCompoCompositionVsInheritance />} />
                        <Route path="classcompocompostatelifting" element={<ClassCompoStateLifting />} />
                        <Route path="classcompohoc" element={<ClassCompoHOC />} />
                        <Route path="classcompoapi" element={<ClassCompoAPI />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;