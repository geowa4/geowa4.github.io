import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Router from './components/Main';

// Render the main component into the dom
ReactDOM.render(<Router />, document.getElementById('app'));
