'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {createHashHistory} from 'history';
import App from './App';
import Home from './Home';

injectTapEventPlugin();

/*
const routes = (
    <Route path="/" handler={App}>
    <DefaultRoute handler={App} />
    <Route name="about" handler={App} />
    <Route name="contact" handler={App} />
    </Route>
    );
    */

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('content')) 
