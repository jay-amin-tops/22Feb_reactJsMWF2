import React, { Component } from 'react';

class CompositionChild extends Component {
    constructor(props) {
        super(props);
        this.state={
            loadingStatus:false,
            data:{},
        }
        fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>response.json()).then((result)=>{
            // console.log(result);
            this.setState({data:result})

        })
    }
    
    render() {
        let FetchData = Object.entries(this.state.data).map(([key,val])=>{
            // console.log(key,val);
            return <li key={key}>{val.title}</li>
        })
        console.log("FetchData",FetchData);
        return (
            <>

            {/* {JSON.stringify(this.state.data)} */}
            <ul>{FetchData}</ul>
            </>
        );
    }
}

export default CompositionChild;