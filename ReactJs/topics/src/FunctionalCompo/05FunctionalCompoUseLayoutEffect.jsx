import React, {  useEffect, useLayoutEffect, useState } from 'react';

const FunctionalCompoUseLayoutEffect = () => {
    const [myState, gmete] = useState(0);
    const [mySecondState, setMySecondState] = useState(0);
    useEffect(() => {
        console.log("called useEffect 1st");
        return (()=>{
            console.log("called return 1st");
        })
    })
    // useEffect(() => {
    //     console.log("called useEffect sec");
    //     return (()=>{
    //         console.log("called return sec");
    //     })
    // }, [])
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
        // return (()=>{
        //     console.log("useLayoutEffect return ");
        // })
    })
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

export default FunctionalCompoUseLayoutEffect;