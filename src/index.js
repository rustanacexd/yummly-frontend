/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadRecipes } from './actions/recipeActions';
import useScroll from 'react-router-scroll';

const store = configureStore();
store.dispatch(loadRecipes());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}
      routes={routes}
      render={applyRouterMiddleware(useScroll()) }/>
  </Provider>, document.getElementById('app')
);
