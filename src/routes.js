import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import NotFoundPage from './components/NotFoundPage';
import RecipePage from './components/recipe/RecipePage';
import ProfilePage from './components/profile/ProfilePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="recipe/:id" component={RecipePage}/>
    <Route path="profile/(:id)" component={ProfilePage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
