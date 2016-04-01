import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';
import Left from './Left.js';
import MenuItem from 'material-ui/lib/menus/menu-item';
import PropTypes from 'react-router';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  }

  handleToggle() { 
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="TrackRx Pharmacy Application" 
          onLeftIconButtonTouchTap={ this.handleToggle.bind(this) }
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          isInitiallyOpen={ true }
          style={{backgroundColor: 'MediumPurple'}}>
          <RaisedButton label="Profile"
            style={{
              marginRight: 10
            }}/> 
          <RaisedButton label="Logout"/> 
        </AppBar>

        <LeftNav open={ this.state.open }>
          <Left toggle={ this.handleToggle.bind(this) } />
        </LeftNav>

      </div>
    );
  }
}
