import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import PropTypes from 'react-router';

let menuItems = [
{ route: '/', text: 'Home', key: 0},
{ route: 'about', text: 'About', key: 1},
{ route: 'contact', text: 'Contact', key: 2},
];

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  }

  handleToggle() { 
    this.setState({open: !this.state.open});
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    console.log(payload);

    this.context.router.push('/');
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

        <LeftNav 
          open={this.state.open}
          menuItems={menuItems} 
          onChange={this._onLeftNavChange} />

      </div>
    );
  }
}
