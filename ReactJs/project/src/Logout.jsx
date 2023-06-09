import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    // const [cookies, setCookie] = useCookies([]);
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
    useEffect(()=>{
        console.log("called");
        removeCookie("userid");
        navigate("/login")
        // cookies.remove("userid");
    })
    return (
        <>
            
        </>
    );
};

export default Logout;