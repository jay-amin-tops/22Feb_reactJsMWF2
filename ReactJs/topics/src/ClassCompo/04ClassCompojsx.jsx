import React, { Component } from 'react';

class ClassCompojsx extends Component {
    changeDataDmFunction = ()=>{
        console.log("called changeDataDmFunction");
    }
    render() {
        const koidata = "Something"
        const changeData = ()=>{
            console.log("called");
        }
        return (
            <>
                {koidata}
                <p>Addition of 50+874 is {50+874} </p>
                {/* <button onClick={changeData()}>Click</button> */}
                <button onClick={changeData}>Click</button>
                <button onClick={this.changeDataDmFunction}>Click</button>
            </>
        );
    }
}

export default ClassCompojsx;