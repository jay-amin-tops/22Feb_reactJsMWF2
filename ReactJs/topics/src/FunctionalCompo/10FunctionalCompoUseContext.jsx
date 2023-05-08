import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext(null);
const FunctionalCompoUseContext = () => {
    const [theme, setTheme] = useState('light');
    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Form>
                    {theme}
                    <label>
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={(e) => {
                                setTheme(e.target.checked ? 'dark' : 'light')
                            }}
                        />
                        Use dark mode
                    </label>
                </Form>
            </ThemeContext.Provider>
        </>
    );
};

function Form({ children }) {
    return <>
        <Panel title="Welcome">
            {children}
            <Button>Click</Button>
            <Button>Click</Button>
        </Panel>
    </>

}
function Panel(props) {
    console.log(props);
    const theme = useContext(ThemeContext);
    const { title, children } = props

    const className = 'panel-'+theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}
function Button({ children }) {
    const theme = useContext(ThemeContext);
    const className = 'button-'+theme;
    return (
        <button className={className}>
            {children}
        </button>
    );
}
export default FunctionalCompoUseContext;