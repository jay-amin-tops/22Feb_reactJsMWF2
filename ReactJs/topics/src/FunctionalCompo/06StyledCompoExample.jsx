import React from 'react';
import styled from 'styled-components';

const StyledCompoExample = () => {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;
    const Wrapper = styled.section` padding: 4em;
    background: papayawhip;`
    return (
        <>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>
            <div className="custom-class">
                data
            </div>
            <div className="custom-class" style={{backgroundColor:"green"}}>
                data
            </div>
        </>
    );
};

export default StyledCompoExample;