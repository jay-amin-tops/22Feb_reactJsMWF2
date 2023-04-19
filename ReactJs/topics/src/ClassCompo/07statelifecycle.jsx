import React, { Component } from 'react';

class Statelifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {data:"Something"}
    }
    // componentWillMount() {
    //     console.log("componentWillMount");        
    // }    
    componentDidMount() {
        console.log("componentDidMount");
    }
    // componentWillReceiveProps(nextProps) {        
    //     console.log("componentWillReceiveProps");
    // }    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return false
        return true
    }
    // componentWillUpdate(nextProps, nextState) {        
    //     console.log("componentWillUpdate");
    // }    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        return (
            <div>
                <p>Change Data</p>
                {/* <button onClick={changeDataFunc}>Click</button> */}
                <button onClick={()=>this.setState({data:"Testing"})}>Click</button>
                <p><strong>State</strong>{this.state.data}</p>
            </div>
        );
    }
}

export default Statelifecycle;