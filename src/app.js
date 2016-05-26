// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store.js';
import Console from './components/Console/index.js';
import Credit from './components/Credit/index.js';

const history = syncHistoryWithStore(browserHistory, store);
const container = document.querySelector('#app-container');

import './style.js'
import { getCSS } from './utils/generateStyle.js';

const reactElement = (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Console} />
          <Route path="/credit" component={Credit} />
        </Router>
      </Provider>

      <style>
        {getCSS()}
      </style>
    </div>
);

export function __unload() {
  // force unload React components
  ReactDOM.unmountComponentAtNode(container); // your container node
}

ReactDOM.render(reactElement, container);
