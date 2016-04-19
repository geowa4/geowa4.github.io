'use strict';

import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';

import 'styles/Contact.styl';

const Social = () => {
  return (
  <Card>
    <CardHeader title="Social" subtitle=""/>
    <CardText>
      If you're looking for me, I usually go by "geowa4" on various sites.
    </CardText>
    <CardActions>
      <FlatButton
        label="GitHub"
        linkButton={true}
        href="https://github.com/geowa4/"
      />
      <FlatButton
        label="Twitter"
        linkButton={true}
        href="https://twitter.com/geowa4"
      />
      <FlatButton
        label="Keybase"
        linkButton={true}
        href="https://keybase.io/geowa4"
      />
      <FlatButton
        label="StackOverflow"
        linkButton={true}
        href="https://stackoverflow.com/users/50214/geowa4"
      />
      <FlatButton
        label="LinkedIn"
        linkButton={true}
        href="https://www.linkedin.com/in/geowa4"
      />
    </CardActions>
  </Card>
  );
};

const RocDev = () => {
  return (
    <Card>
      <CardHeader title="RocDev" subtitle=""/>
      <CardText>
        In an attempt to create a community of deveopers in Rochester, NY, I've created a team on Slack called "rocdev".
        If you'd like an invite and are involved in software development, send me your email address.
      </CardText>
      <CardActions>
        <FlatButton
          label="Request an Invite"
          linkButton={true}
          href="https://docs.google.com/forms/d/1UE7o3BEV2iMpBIxXjQE4CZRAT8ozGe8xVb1BS9iJryI/viewform"
        />
      </CardActions>
    </Card>
  );
};

const ContactComponent = () => {
  return (
    <div className="contact-component">
      <Social/>
      <RocDev/>
    </div>
  );
};

ContactComponent.displayName = 'ContactComponent';

// Uncomment properties you need
// ContactComponent.propTypes = {};
// ContactComponent.defaultProps = {};

export default ContactComponent;
