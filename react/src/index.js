require('./styles/project.scss')

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render((
    <MuiThemeProvider>
        <Home />
    </MuiThemeProvider>
), document.getElementById('root'));
