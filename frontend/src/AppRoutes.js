import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { AppContainer, hot } from 'react-hot-loader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from './colors/index';
import Loading from './boilerplates/Loading';

const AsyncHome = Loadable({
  loader: () => import('./views/Components/Components.js'),
  modules: ['./views/Components/Components.js'],
  loading: Loading,
});

const AsyncLogin = Loadable({
  loader: () => import('./views/LoginPage/LoginPage.js'),
  modules: ['./views/LoginPage/LoginPage.js'],
  loading: Loading,
});

class AppRoutes extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={AsyncHome} />
                <Route path="/auth" component={AsyncLogin} />
              </Switch>
            </BrowserRouter>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(AppRoutes);