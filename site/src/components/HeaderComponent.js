'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import Avatar from 'material-ui/lib/avatar';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

import 'styles/Header.styl';

class HeaderComponent extends React.Component {
  handleNavigation(pathname) {
    return (event) => {
      event.preventDefault();
      this.context.router.push(pathname);
    }
  }

  render() {
    const style = {
      height: 150,
      width: 150,
      margin: '20 auto',
      textAlign: 'center',
      display: 'inline-block'
    };
    return (
      <div className="header-component">
        <a className="avatar" href="/">
          <Paper style={style} zDepth={5} circle={true}>
            <Avatar src="https://avatars.githubusercontent.com/u/136390?v=3" size={150}/>
          </Paper>
        </a>
        <div className="nav">
          <FlatButton
            label="Bio"
            linkButton={true}
            href="/"
            onClick={this.handleNavigation('/')}
            primary={true}
            disabled={this.context.router.isActive('/', true)}
            icon={<FontIcon className="material-icons">home</FontIcon>}
          />
          <FlatButton
            label="Blog"
            linkButton={true}
            href="//blog.geowa4.software"
            primary={true}
            icon={<FontIcon className="material-icons">book</FontIcon>}
          />
          <FlatButton
            label="Projects"
            linkButton={true}
            href="/projects/"
            onClick={this.handleNavigation('/projects/')}
            primary={true}
            disabled={this.context.router.isActive('/projects/')}
            icon={<FontIcon className="material-icons">code</FontIcon>}
          />
          <FlatButton
            label="Contact"
            linkButton={true}
            href="/contact/"
            onClick={this.handleNavigation('/contact/')}
            primary={true}
            disabled={this.context.router.isActive('/contact/')}
            icon={<FontIcon className="material-icons">contacts</FontIcon>}
          />
        </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
HeaderComponent.contextTypes = {
  router: React.PropTypes.object
};
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
