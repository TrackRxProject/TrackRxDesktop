import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from './LeftNav.js';
import MenuItem from 'material-ui/lib/menus/menu-item';
import PropTypes from 'react-router';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      leftNavOpen: false
    };
  }

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  }

  toggleLeftNav() { 
    this.setState({
      leftNavOpen: !this.state.leftNavOpen
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="TrackRx Pharmacy Application" 
          onLeftIconButtonTouchTap={ this.toggleLeftNav.bind(this) }
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          isInitiallyleftNavOpen={ true }
          style={{backgroundColor: 'MediumPurple'}}>
          <RaisedButton label="Profile"
            style={{
              marginRight: 10
            }}/> 
          <RaisedButton label="Logout"/> 
        </AppBar>

        <LeftNav open={ this.state.leftNavOpen } toggle={ this.toggleLeftNav.bind(this) }/>
      </div>
    );
  }
}
