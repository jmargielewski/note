import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import store from 'store';

import Notes from 'pages/Notes';
import Twitters from 'pages/Twitters';
import Articles from 'pages/Articles';
import Details from 'pages/Details';

import MainTemplate from 'templates/MainTemplate';
import GridTemplate from 'templates/GridTemplate';
import DetailsTemplate from 'templates/DetailsTemplate';

import routes from 'routes';

const UserPageRoute = ({ component: Component, layout: Layout, pageType, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout pageType={pageType}>
        <Component {...props} />
      </Layout>
    )}
  />
);

UserPageRoute.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  component: PropTypes.func.isRequired,
  layout: PropTypes.instanceOf(GridTemplate || DetailsTemplate).isRequired,
};

UserPageRoute.defaultProps = {
  pageType: 'notes',
};

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
            <UserPageRoute
              exact
              path={routes.notes}
              layout={GridTemplate}
              component={Notes}
              pageType="notes"
            />
            <UserPageRoute
              path={routes.note}
              layout={DetailsTemplate}
              component={Details}
              pageType="notes"
            />
            <UserPageRoute
              exact
              path={routes.twitters}
              layout={GridTemplate}
              component={Twitters}
              pageType="twitters"
            />
            <UserPageRoute
              path={routes.twitter}
              layout={DetailsTemplate}
              component={Details}
              pageType="twitters"
            />
            <UserPageRoute
              exact
              path={routes.articles}
              layout={GridTemplate}
              component={Articles}
              pageType="articles"
            />
            <UserPageRoute
              path={routes.article}
              layout={DetailsTemplate}
              component={Details}
              pageType="articles"
            />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
