import React, { Component } from 'react';

class CompositionChild extends Component {
    render() {
        return (
            <div>
                <p>Child compo</p>
                This is parent compo data : {this.props.data}


                {this.props.children}
                
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default CompositionChild;