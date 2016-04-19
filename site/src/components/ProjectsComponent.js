'use strict';

import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';
import repos from '../sources/GitHubRepos';

import 'styles/Projects.styl';

const Repo = ({repo}) => {
  return (
    <Card>
      <CardHeader title={repo.name} subtitle={repo.fork ? 'fork' : ''}/>
      <CardText>{repo.description}</CardText>
      <CardActions>
        <FlatButton
          label="Home"
          linkButton={true}
          href={`${repo.html_url}`}
        />
        <FlatButton
          label="Issues"
          linkButton={true}
          href={`${repo.html_url}/issues`}
        />
        <FlatButton
          label="Stargazers"
          linkButton={true}
          href={`${repo.html_url}/stargazers`}
        />
        <FlatButton
          label="Forks"
          linkButton={true}
          href={`${repo.html_url}/network`}
        />
      </CardActions>
    </Card>
  );
};
class ProjectsComponent extends RxReact.Component {
  getStateStream() {
    return Rx.Observable.just({repos: []}).merge(repos);
  }

  render() {
    const repo_html = this.state.repos.map(r => <Repo key={r.id} repo={r}/>);
    return (
      <div className="projects-component">
        {repo_html}
      </div>
    );
  }
}

ProjectsComponent.displayName = 'ProjectsComponent';

// Uncomment properties you need
// ProjectsComponent.propTypes = {};
// ProjectsComponent.defaultProps = {};

export default ProjectsComponent;
