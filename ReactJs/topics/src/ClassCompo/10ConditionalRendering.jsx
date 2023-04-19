import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { theme: "dark",enabled:true }
    }

    changeThemeDark = () => {
        this.setState({ theme: "dark" })
    }
    changeThemeLight = () => {
        this.setState({ theme: "light" })
    }
    toggleTheme = () => {
        if (this.state.theme == "dark") {
            
            this.setState({ theme: "light" })
        }else{
            this.setState({ theme: "dark" })

        }
    }
    render() {
        let ThemeDarkData = ""
        if (this.state.theme == "dark") {
            ThemeDarkData = <div className="dark">This will display dark theme data</div>
        } else {
            ThemeDarkData = <div className="light">This will display light theme data</div>
        }
        return (
            <>
                <button onClick={this.changeThemeDark}>Change to Dark</button>
                <button onClick={this.changeThemeLight}>Change to Light</button>
                <button onClick={this.toggleTheme}>Toggle Theme</button>
                <button onClick={()=>this.setState({enabled:!this.state.enabled})}>Toggle Theme</button>
                <h3>
                {JSON.stringify(this.state.enabled)}
                </h3>
                { this.state.enabled ? <div>Enabled data</div>:<div>Disabled data</div> }
                <div className="conditional">
                    <h2>inside html render return </h2>
                    <p>if we want to perform some data according condition that time we need to adopt trnary operator ? :</p>
                    {(this.state.theme == 'dark') ? "data" : "else"}
                    {(this.state.theme == 'dark') ? <>my division data</> : <>my section data</>}
                </div>

                <h2>Load data from render before return condition</h2>
                {ThemeDarkData}

                <div className="dark"  style={ (this.state.theme == 'dark') ?  {backgroundColor:"grey",color:"white"} : {}} >This will change</div>
            </>
        );
    }
}

export default ConditionalRendering;