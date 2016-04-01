'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('content')
);

