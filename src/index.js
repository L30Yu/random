import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import Error from './component/Error';
import Home from './component/Home';
import RandomNumber from './component/RandomNumber';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={RandomNumber} />
      <Route path="*" component={Error} />
    </Route>
  </Router>,
  document.getElementById('root')
);
