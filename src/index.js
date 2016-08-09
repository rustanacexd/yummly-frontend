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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/styles.scss';
import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';


const store = configureStore();

//TODO: CHECK IF recipes data exists when reloaded (redux-pesist)
store.dispatch(loadRecipes());


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}
        routes={routes}
        render={applyRouterMiddleware(useScroll()) }/>
    </Provider>
  </MuiThemeProvider>, document.getElementById('app')
);
