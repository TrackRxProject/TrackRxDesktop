'use strict';

/*
var React = require('react');
var ReactDom = require('react-dom');
var Component = React.Component;
var NavBar = require('./NavBar');
var Table = require('./Table');
*/

import React from 'react'
import NavBar from './NavBar'
import { RouteHandler } from 'react-router';
import Home from './Home'

export default class App extends React.Component {

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('mounted');
  }

  contextTypes: {
    router: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <NavBar/>

        {this.props.children}
      </div>
    );
  }
}

/*
import React from 'react';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar
, LeftNav = mui.LeftNav
, MenuItem = mui.MenuItem;

// Define menu items for LeftNav

class App extends React.Component {

  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleClick(e) {
    e.preventDefault();

    this.refs.leftNav.toggle();
  }

  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) {
        return i;
      }
    }
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {

    return (
        <div id="page_container">

        <LeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />

        <header>
        <AppBar title='MUI Routing' onLeftIconButtonTouchTap={this._handleClick} />
        </header>

        <section className="content">
        <RouteHandler />
        </section>

        </div>
        );
  }

}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.contextTypes = {
  router: React.PropTypes.func
};
*/

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'No bottles'};
  }

  buttonClicked() {
    console.log(this);
    console.log('button clicked');
      var request = new Request('http://trackrx.xyz:8000/prescription/1/activate', {
      headers: new Headers({
      'Content-Type': 'application/json'
      })
    });

    var that = this; // save for updating state inside fetch

    fetch(request, {
      method: 'GET',
      mode: 'cors' // allow requests to non-origin domain
    }).then(function(response) {
      return response.text()
    }).then(function(text) {
      console.log(text);
      var data = JSON.parse(text);
      console.log(document.getElementById("patient"));
      if (data.activate) {
        that.setState({data: data.interval});
      }
    });
  }

  render() {
    return (
      <div>
        <p id="patient">{this.state.data}</p>
        <button onClick={this.buttonClicked.bind(this)}>Refresh Bottles</button>
      </div>
    );
  }
}
*/

