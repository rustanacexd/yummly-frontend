import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import NotFoundPage from './components/NotFoundPage';
import SingleRecipePage from './components/recipe/SingleRecipePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="recipe/:id" component={SingleRecipePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
