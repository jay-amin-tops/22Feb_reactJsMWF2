import React, { Component } from 'react';
import { Link,Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="classcompointro">Class Compo Intro</Link></li>
          <li><Link to="classcompoconstructor">Constuctor</Link></li>
          <li><Link to="classcompostate">State In Class Compo</Link></li>
          <li><Link to="classcompojsx">JSX In Class Compo</Link></li>
          <li><Link to="classcompoporps">Class Compo Props</Link></li>
          <li><Link to="classcompostatelifecycle">Class Compo State LifeCycle</Link></li>
          <li><Link to="classcompostatelifecycleloader">Class Compo State LifeCycle Loader</Link></li>
          <li><Link to="classcompoconditionalrender">Class Compo Conditional Render</Link></li>
          <li><Link to="classcompolistkeysmap">Class Compo List Keys</Link></li>
          <li><Link to="classcompodynamicmenu">Class Compo DropDown</Link></li>
          <li><Link to="classcomporestspread">Class Compo Spread Vs Rest</Link></li>
          <li><Link to="classcompocontrolledcompo">Class Compo ControlledCompo</Link></li>
          <li><Link to="classcompouncontrolledcompo">Class Compo unControlledCompo</Link></li>
          <li><Link to="classcompocompositionvsinheritance">Class Compo Composition vs Inheritance</Link></li>
          <li><Link to="classcompocompostatelifting">Class Compo State Lifting</Link></li>
          <li><Link to="classcompohoc">Class Compo High Order Compo</Link></li>
          <li><Link to="classcompoapi">Class Compo API</Link></li>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}

export default ClassCompoIntro;