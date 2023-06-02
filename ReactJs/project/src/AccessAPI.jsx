import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [data,setData] = useState();
    const [loader,setLoader] = useState(false);
    // fetch("url").then("jsonresponse").then("result")
    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/todos").then((result) => {
            console.log(result.data);
            let AllData = Object.entries(result.data).map(([key,val],i)=>{
                console.log("key ",key,"value ",val);
                return <li key={key}> {val.title} </li>
            })
            setData(AllData)
            setLoader(true)
            // result.map(([key,val],i)=>{
        })
        // fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json()).then((result) => {
        //     console.log(result);
        //     let AllData = result.map((val,key)=>{
        //         console.log("key ",key,"value ",val.title);
        //         return <li key={key}> {val.title} </li>
        //     })
        //     setData(AllData)
        //     setLoader(true)
        //     // result.map(([key,val],i)=>{
        // })
    },[])
    return (
        <>
            <p>fetch("url").then("jsonresponse").then("result")</p>
            <p>ECMAScript API calling we are using fetch().</p>
            <p>AXOIS is other way to adopt API concept in reactJs (REST API)</p>
            {/* {JSON.stringify(data)} */}
            { loader? data: "loading..." }
        </>
    );
};

export default HomePage;