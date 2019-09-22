import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// PAGES
import Form from './pages/Form';
import Nav from './cmps/Nav';

class Router extends Component {

  render() {
    return (
      <HashRouter>
        <div className="app-nav-route">
          <Nav />
          <div className="route">
            <Switch>
              <Route exact path="/" component={Form} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Router;