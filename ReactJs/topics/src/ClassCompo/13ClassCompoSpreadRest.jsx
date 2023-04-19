import React, { Component } from 'react';

class ClassCompoSpreadRest extends Component {
    render() {
        const addition = (a,...b)=>{
            console.log("called addition value of a : ",a,"value of b ",b);
        }
        addition(50,60,80,90)
        addition(50,60)
        const additionSpread = (a,b,c,d)=>{
            console.log("called addition value of a : ",a,b,c,d);
        }
        additionSpread(50,60,80,90)
        const numbers = [1, 3, 5, 7]
        additionSpread(...numbers)
        additionSpread(50,60)
        return (
            <>
               <>
                function myBio(firstName, lastName, ...otherInfo) &#123; <br />
                  &nbsp;&nbsp;&nbsp; return otherInfo;<br />
                &#125;<br />

                // Invoke myBio function while passing five arguments to its parameters: <br />
                myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
                
                <br />
                const myName = ["Sofela", "is", "my"];
                <br />
                const aboutMe = ["Oluwatobi", ...myName, "name."];
                <br />
                <p>About me : aboutMe</p>
                
                const numbers = [1, 3, 5, 7];<br />

                function addNumbers(a, b, c, d)&#123;<br />
                &nbsp;&nbsp;&nbsp;return a + b + c + d;<br />
                &#125;<br />

                console.log(addNumbers(...numbers));
                <br />
                console.log(aboutMe);
                {/* {this.getDataSpread(arr)} */}
            </>  
            </>
        );
    }
}

export default ClassCompoSpreadRest;