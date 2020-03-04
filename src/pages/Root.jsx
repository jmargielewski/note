import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'pages/Notes';
import Twitter from 'pages/Twitter';
import Articles from 'pages/Articles';
import UserPageTemplate from '../templates/UserPageTemplate';

const UserPageRoute = ({ component: Component, layout: Layout, pageType, ...rest }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <Route
    {...rest}
    render={props => (
      <Layout pageType={pageType}>
        <Component {...props} />
      </Layout>
    )}
  />
  /* eslint-enable react/jsx-props-no-spreading */
);

UserPageRoute.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
  component: PropTypes.element.isRequired,
  layout: PropTypes.instanceOf(UserPageTemplate).isRequired,
};

UserPageRoute.defaultProps = {
  pageType: 'note',
};

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <UserPageRoute
            exact
            path="/"
            layout={UserPageTemplate}
            component={Notes}
            pageType="note"
          />
          <UserPageRoute
            path="/twitters"
            layout={UserPageTemplate}
            component={Twitter}
            pageType="twitter"
          />
          <UserPageRoute
            path="/articles"
            layout={UserPageTemplate}
            component={Articles}
            pageType="article"
          />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
