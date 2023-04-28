import React, { useMemo, useState } from 'react';

const FunctionalCompoUseMemo = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["hey", "this", "is", "cool"];
    const word = words[wordIndex];

    const computeLetterCount = (word)=>{
        console.log("computeLetterCount",word);
        let i = 0;
        while (i < 100000) i++;
        return word.length;
    }
    // const letterCount = computeLetterCount(word)
    const letterCount =useMemo(()=> computeLetterCount(word))
    return (
        <>
            {/* {words} */}
            Word : {words[wordIndex]}
            <br />
            wordIndex : {wordIndex}
            <br />
            Word : {word}
            <br />
            {/* computeLetterCount : {computeLetterCount(wordIndex)} */}
            <p>
                "{word}" has {letterCount} letters
            </p>
            <button onClick={() => {
                if (wordIndex + 1 === words.length) {
                    setWordIndex(0);
                } else {
                    setWordIndex(wordIndex + 1);
                }
            }}>
                Click
            </button>
        </>
    );
};

export default FunctionalCompoUseMemo;