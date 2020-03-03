import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'pages/Notes';
import Twitter from 'pages/Twitter';
import Articles from 'pages/Articles';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/twitter" component={Twitter} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
