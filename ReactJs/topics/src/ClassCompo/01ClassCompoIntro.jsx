import React, { Component } from 'react';

class ClassCompoIntro extends Component {
    render() {
        return (
            <>
              <p>Class Compo will be created by class</p>  
              <p>In reactjs we are not able to create an object of any class</p>  
              <p>React Will create its object by inheriting React.Component / Component</p>  
              <p>render method will be responsible for the return</p>  
              <p>class keyword se class bnega</p>
              <br /> 
              class ClassCompoIntro extends Component &#123; 
              <br /> 
                render() &#123;
              <br /> 
                   &nbsp;&nbsp;&nbsp;&nbsp; return ( &lt;tag&gt;&lt;/tag&gt; )
              <br /> 
                &#125;
              <br /> 
            </>
        );
    }
}

export default ClassCompoIntro;