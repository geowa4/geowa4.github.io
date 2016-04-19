import 'styles/App.styl';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import Header from './HeaderComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <Paper zDepth={1}>
        <Header pathname={location.pathname}/>
        {this.props.children}
      </Paper>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
