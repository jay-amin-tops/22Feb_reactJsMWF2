import React, { useState } from 'react';

const StateInFunctionalCompo = () => {
    // [a, b] = [10, 20];
    // a = 10
    // b = 20
    // console.log(a);
    // console.log(b);
    const [statevariablename,setmethodforthestate] = useState("This is the default state value")
    const [koipannaam,methodforsetstate] = useState("other state for testing")
    // const data = "something"
    let data = "something"
    function koipaneventhandler() {
        console.log("called");
        data = "new val"
        setmethodforthestate("Updated value")
    }
    return (
        <>
        {data}
        <p>State data : {statevariablename}</p>
        <p>State data : {koipannaam}</p>
          <button onClick={koipaneventhandler}>Change State</button>  
        </>
    );
};

export default StateInFunctionalCompo;