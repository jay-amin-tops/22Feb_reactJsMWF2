import React, { useEffect, useState } from 'react';

const FunctionalCompoUseEffect = () => {
    const [myState, gmete] = useState(0);
    const [mySecondState, setMySecondState] = useState(0);
    // useEffect(()=>{
    //     console.log("called useEffect");
    // })
    // useEffect(() => {
    //     console.log("called useEffect");
    // }, [])
    // useEffect(() => {
    //     console.log("called useEffect");
    // }, [mySecondState,myState])
    // useEffect(() => {
    //     console.log("called useEffect");
    // }, [mySecondState])
    useEffect(() => {
        console.log("called useEffect");
        return (()=>{
            console.log("called return ");
        })
    }, [])
    const anything = () => {
        console.log("Btn Click");
        gmete(myState + 1)
    }
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <p>useEffect is a React Hook that lets you synchronize a component with an external system.</p>
                        {/* <button onClick={anything()}>Click</button> */}
                        <button onClick={anything}>Click {myState}</button>
                        <button onClick={() => { setMySecondState(mySecondState + 2) }}>Click {mySecondState}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FunctionalCompoUseEffect;