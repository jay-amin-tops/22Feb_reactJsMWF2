import React, { Component } from 'react';
import CompositionChild from './17CompositionChild.jsx';

class ClassCompoCompositionVsInheritance extends Component {
    render() {
        return (
            <div>
                <h2>Parent Compo</h2>
                {/* <CompositionChild data="<p>From Prant</p>"/> */}
                {/* <CompositionChild data=<><p>From parent</p><>something</></>/> */}
                {/* <><p>From parent</p><>something</></> */}
                <CompositionChild data="this is props data">
                    <h3>Something</h3>
                    <p>This is the data from parent compo with html strucutre</p>
                </CompositionChild>
            </div>
        );
    }
}

export default ClassCompoCompositionVsInheritance;