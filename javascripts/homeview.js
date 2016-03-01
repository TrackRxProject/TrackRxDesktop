'use strict';

var React = require('react');
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

const AppBarExampleIcon = () => (
  <AppBar
    title="TrackRx Pharmacy Application"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      backgroundColor: 'MediumPurple'
    }}>
  <RaisedButton label="Profile"
    style={{
      marginRight: 10
    }}/> 
  <RaisedButton label="Logout"/> 
  </AppBar>

  );

export default AppBarExampleIcon;
