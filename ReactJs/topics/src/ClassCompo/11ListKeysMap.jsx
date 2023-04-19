import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = [12,45,"test",true];
        const kvArray = [
            { key: 1, value: 10 },
            { key: 2, value: 20 },
            { key: 3, value: 30 },
          ];
        let htmlLi = ""
        const ResponseData = data.forEach(element => {
            return <li>{element}</li>
            console.log(element);
            htmlLi += <li>{element}</li>
        });
        // const ArryData = data.map(([dt,data],index)=>{
        const ArryData = data.map((dt,index)=>{
        // console.log("index",index);
        // console.log("dt",dt);
        return <li key={index}>{JSON.stringify(dt)}</li>})
        const MenuData = kvArray.map(({key,value},index)=>{
        // const MenuData = kvArray.map((value,index)=>{
            // console.log("MenuData value",value);
            // console.log("MenuData value of key",value.key);
            // console.log("MenuData value",value.value);
            // console.log("MenuData index",index);
        console.log("MenuData key",key);
        console.log("MenuData value",value);
        console.log("MenuData index",index);
        return <li key={index}>{JSON.stringify(value)}</li>
    })
        return (
            <>
                {data[0]}
                {data[2]}
                <h2>array data access using foreach with appending</h2>
                {htmlLi}
                <ul>
                {ArryData}
                </ul>
                {/* {ResponseData} */}
                <br />
                <br />
                <br />
                <br />
            </>
        );
    }
}

export default ConditionalRendering;