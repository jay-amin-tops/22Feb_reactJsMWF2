import React, { useState, useEffect, useRef } from 'react';
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
        {JSON.stringify(ele)}

            <table>
                <thead>
                    <tr>
                        <th>col-1</th>
                        <th>col-2</th>
                    </tr>
                </thead>
                {(ele && ele.length) ?
                <tbody><tr>
                    <td>{ele[0]}</td>
                    <td>{ele[1]}</td>
                </tr>
                <tr>
                    <td>{ele[2]}</td>
                    <td>{ele[3]}</td>
                </tr></tbody> :<tbody><tr><td colSpan={2}>No Data Found</td></tr></tbody> }
            </table>
            <button className='btn btn-primary mt-2' onClick={() => childRef.current.getAlert()}>Shuffle</button>

            <FunctionalUseImpChild onAddHandler={parentFunction} ref={childRef} />
        </>
    );
};

export default FunctionalCompoUseImp;