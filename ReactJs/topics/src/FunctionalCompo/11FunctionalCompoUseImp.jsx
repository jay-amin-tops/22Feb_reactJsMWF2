import React, { useState,useEffect,useRef } from 'react';
import FunctionalUseImpChild from './12FunctionalUseImpChild.jsx';

const FunctionalCompoUseImp = () => {
    const [ele, setEle] = useState();
    const childRef = useRef();
    useEffect(() => {
    }, [ele])
    const parentFunction = async (data) => {
        console.log("called parentFunction update", data);
        await setEle(data)
    }
    return (
        <>
            <button className='btn btn-primary mt-2' onClick={() => childRef.current.getAlert()}>Shuffle</button>

            <FunctionalUseImpChild onAddHandler={parentFunction} ref={childRef} />
        </>
    );
};

export default FunctionalCompoUseImp;