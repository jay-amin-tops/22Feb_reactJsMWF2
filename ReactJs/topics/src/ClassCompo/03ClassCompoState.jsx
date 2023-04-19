import React, { Component } from 'react';

class ClassCompoState extends Component {
    dataMember;
    constructor(props) {
        super(props);
        this.state = {data:"Something"}
        this.dataMember = "DM"
        console.log(this.dataMember);
        // this.changeData = this.changeData.bind(this)
    }
    // changeData =()=>{
    //     console.log("called");
    // }
    // changeData(){
    //     console.log("called");
    //     // Something = "Change"
    //     this.setState({data:"Testing"})
    // }
    changeData=()=>{
        console.log("called");
        // Something = "Change"
        this.setState({data:"Testing"})
        this.dataMember = "Change"
    }
    
    render() {
        let Something = "Data"
        // const changeDataFunc=()=>{
        //     console.log("called");
        //     Something = "Change"
        // }
        return (
            <>
                <p>Change Data</p>
                {/* <button onClick={changeDataFunc}>Click</button> */}
                <button onClick={this.changeData}>Click</button>
                {Something}
                <p><strong>State</strong>{this.state.data}</p>
                {this.dataMember}
                
            </>
        );
    }
}

export default ClassCompoState;