/* eslint-disable react/jsx-sort-props */
import React from 'react';
import { Redirect, Route } from 'react-router';

import requireAuthentication from './hoc/requireAuthentication';

import App from './components/App.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import LoginPage from './containers/LoginPage.jsx';
import TotalScorePage from './containers/TotalScorePage.jsx';
import LessonsPage from './containers/LessonsPage.jsx';
import ErrorPage from './containers/ErrorPage.jsx';

export default (
    <Route component={App}>
        <Redirect from="/" to="login" />
        <Route path="login" component={LoginPage} />
        <Route component={requireAuthentication(LoggedInLayout)}>
            <Route path="totalscore" component={TotalScorePage} />
            <Route path="lessons" component={LessonsPage} />
            <Route path="*" component={ErrorPage} />
        </Route>
    </Route>
);
