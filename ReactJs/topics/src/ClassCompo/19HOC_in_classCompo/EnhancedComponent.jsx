import React, { Component } from 'react';
const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        clickHnadle = () => {
            console.log("called inside enhanced");
        }
        render() {
            console.log("Enhanced Compo called");
            return <>
                <OriginalComponent clickHnadle={this.clickHnadle} />
            </>
        }
    }
    return NewComponent;
}
export default EnhancedComponent;