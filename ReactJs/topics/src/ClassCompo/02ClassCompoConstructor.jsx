import React, { Component } from 'react';

class ClassCompoConstructor extends Component {
    constructor(props) {
        super(props);
    }
    // constructor() {
    //     console.log("called con");
    // }
    
    render() {
        return (
            <div>
                <h3>Constructor</h3>
                <p>Constructor is a method which is invoked by default when components are called</p>
                <p>Render is also calling by default but render used for give response to the compo</p>
                <p>Constructor will use for initiate some value</p>
            </div>
        );
    }
}

export default ClassCompoConstructor;