'use strict';

import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import 'styles/Bio.styl';

const BioComponent = () => {
  return (
    <div className="bio-component">
      <Card>
        <CardHeader title="Bio" subtitle=""/>
        <CardText>
          George is a Software Craftsman living in Rochester, NY that dedicates himself to continuous improvement.
          Over the past few years, he has focused on the DevOps movement and Infrastructure as Code.
          The primary expense for software companies tends to be salaries.
          With automation, more of that expensive time is free to work on more direct value streams.
          This same automation turns George into the mythical "10x engineer" by turning 10 1x engineers into 2x engineers.
        </CardText>
      </Card>
      <Card>
        <CardHeader title="Extra Curriculars" subtitle=""/>
        <CardText>
          While learning new tools and techniques takes up a lot of time, George also makes life a priority.
          He loves spending time with his wife and two children and playing disc golf at one of the local courses.
        </CardText>
      </Card>
    </div>
  );
};

BioComponent.displayName = 'BioComponent';

// Uncomment properties you need
// BioComponent.propTypes = {};
// BioComponent.defaultProps = {};

export default BioComponent;
