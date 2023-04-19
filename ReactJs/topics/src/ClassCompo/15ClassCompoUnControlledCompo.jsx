import React, { Component } from 'react';

class ClassCompoControlledCompo extends Component {
    constructor() {
        super();
        this.usernameinp = React.createRef();
        this.inpRef =React.createRef();
        this.inpPassRef =React.createRef();
    }
    submitdata=(event)=>{  
        event.preventDefault();
        console.log(this.usernameinp);
    }
    render() {
        return (
            <>
              <form onSubmit={this.submitdata} method="post">
                <input type="text" value="" ref={this.usernameinp} name="username" id="username" />
                <input type="submit" value="save"  name="btn" id="btn" />
              </form>
              <div>
                <form method="post" onSubmit={this.submitdata}>   
                    <input type="text" ref={this.inpRef} name="uname" id="uname" /> { JSON.stringify(this.inpRef)}
                    <input type="text" ref={this.inpPassRef} name="uname" id="uname" /> { JSON.stringify(this.inpRef)}
                </form>
            </div>
            </>
        );
    }
}

export default ClassCompoControlledCompo;