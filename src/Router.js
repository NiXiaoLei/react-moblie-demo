import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom'
import store from './store'
import Answer from './pages/Answer'
import './Router.scss';

class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Answer}></Route>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }





}

export default Router;
