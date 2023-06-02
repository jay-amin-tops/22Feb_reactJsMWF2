import React, { useState } from 'react';

const CustomHook = (intval, initError) => {
    const [inp,setInput] = useState(intval);
    const [errors,setError] = useState(initError);
    const handleChange=(e)=>{
        // console.log("called",e);
        // console.log("called",e.target);
        // console.log("called",e.target.value);
        // setInput("anything")
    
        setInput((inp)=>({...inp,[e.target.name]:e.target.value}))
        if (e.target.value == "") {
            let SpanId = [e.target.name]+"Error";
            console.log("inside condition",SpanId);
            setError({ ...errors,[SpanId]: "This field is required" })
        } else {
            console.log("inside else condition");
            setError({ ...errors, "usernameError": "" })
        }

    }
    return {handleChange,inp,errors};
};

export default CustomHook;