import 'babel-polyfill';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store.js';
import Top from './components/Top.jsx!';

const history = syncHistoryWithStore(browserHistory, store);
const container = document.querySelector('#app-container');

const reactElement = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Top} />
        </Router>
    </Provider>
);

export function __unload() {
  // force unload React components
  ReactDOM.unmountComponentAtNode(container); // your container node
}

ReactDOM.render(reactElement, container);
