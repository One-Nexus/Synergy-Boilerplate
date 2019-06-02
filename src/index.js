import React from 'react';
import ReactDOM from 'react-dom';
import '@onenexus/synergy';
import * as modules from './modules';
import theme from './themes/myTheme';

Object.assign(window, { React, ReactDOM });

const App = () => {
    Synergy.theme(modules, theme);

    return (
        <React.Fragment>
            <MyModule title='Title'>
                Lorem ipsum dolor sit amet
            </MyModule>

            <MyModule title='Title' highlight dismiss>
                Click the ✖ to dismiss panel
            </MyModule> 
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();