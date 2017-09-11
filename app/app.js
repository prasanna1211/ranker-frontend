/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

/**
 *
 * TODO: Use manifest, htaccess for dll building
 * Import all the third party stuff
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from './store';

/**
 * Import Main scss file, for global styles
 */
import './styles/main.scss';

/**
 * Loading normalize css to reset default and normalize CSS properties in different browsers
 */
require('normalize-css');

/**
 * Needed for onTouchTap
 * http:stackoverflow.com/a/34015469/988941
 */

injectTapEventPlugin();

/**
 * Create redux store with history
 * this uses the singleton browserHistory provided by react-router
 * Optionally, this could be changed to leverage a created history
 * e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
 */
const initialState = {};
const store = configureStore(initialState, browserHistory);

/**
 * Set up the router, wrapping all Routes in the App component
 */
import App from './modules/Core/components/main';
import Routes from './routes';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('app')
  );
};

render();

/**
 * accept hot reload only if there is support
 */
if (module.hot) {
  /**
   * modules.hot.accept does not accept dynamic dependencies,
   * have to be constants at compile-time
   */
  module.hot.accept();
}

/**
 * Install ServiceWorker and AppCache in the end since
 * it's not most important operation and if main code fails,
 * we do not want it installed
 */
import { install } from 'offline-plugin/runtime';
install();
