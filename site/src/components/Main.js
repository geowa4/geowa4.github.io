'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './AppComponent';
import Bio from './BioComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

class RouterComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Bio}/>
          <Route path="/projects/" component={Projects}/>
          <Route path="/contact/" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

RouterComponent.displayName = 'RouterComponent';

// Uncomment properties you need
// RouterComponent.propTypes = {};
// RouterComponent.defaultProps = {};

export default RouterComponent;
