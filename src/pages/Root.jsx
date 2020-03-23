import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import store from 'store';

import Notes from 'pages/Notes';
import Twitters from 'pages/Twitters';
import Articles from 'pages/Articles';
import Details from 'pages/Details';
import LoginPage from 'pages/LoginPage';

import MainTemplate from 'templates/MainTemplate';
import GridTemplate from 'templates/GridTemplate';
import DetailsTemplate from 'templates/DetailsTemplate';

import routes from 'routes';

const UserPageRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

UserPageRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  layout: PropTypes.func.isRequired,
};

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
            <UserPageRoute exact path={routes.notes} layout={GridTemplate} component={Notes} />
            <UserPageRoute path={routes.note} layout={DetailsTemplate} component={Details} />
            <UserPageRoute
              exact
              path={routes.twitters}
              layout={GridTemplate}
              component={Twitters}
            />
            <UserPageRoute path={routes.twitter} layout={DetailsTemplate} component={Details} />
            <UserPageRoute
              exact
              path={routes.articles}
              layout={GridTemplate}
              component={Articles}
            />
            <UserPageRoute path={routes.article} layout={DetailsTemplate} component={Details} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
