import React, { useMemo, useState } from 'react';

const FunctionalCompoUseMemoFactorial = () => {
    const [numb, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    // const factorial = factorialExample(numb)
    const factorial = useMemo(() => factorialExample(numb), [numb]);
    const onChange = event => {
        setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(i => i + 1);
    return (
        <>
         <input type="number" value={numb} onChange={onChange} />
         inc is {inc}
        is {factorial}
            <button onClick={onClick}>Re-render</button>

        </>
    );
};

function factorialExample(n) {
    return n <= 0 ? 1 : n * factorialExample(n - 1);
    // if (numb <= 1 ) {
    //     return 1
    // } else {
    //     return numb * factorialExample(numb-1)
    // }
}

export default FunctionalCompoUseMemoFactorial;