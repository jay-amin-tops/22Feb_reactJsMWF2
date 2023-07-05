import React, { useEffect } from 'react';
import {retierveUsers} from './../Action/users';
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        getUsers()    
        // dispatch(retierveUsers())
    })
    let getUsers= async ()=>{
        await dispatch(retierveUsers())
    }
    return (
        <div>
            Testing
        </div>
    );
};

export default HomePage;