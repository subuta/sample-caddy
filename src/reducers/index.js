import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { enableBatching } from 'redux-batched-actions';
import undoable from 'redux-undo';
import { routerReducer } from 'react-router-redux';
import _ from 'lodash';

import _console from './console.js';

const rootReducer = combineReducers({
  routing: routerReducer,

  console: undoable(_console)
});

const reducerHoc = [
  enableBatching
];

// compose reducer sequentially.
const composedReducer = _.reduce(reducerHoc, (reducer, hoc) => {
  reducer = hoc(reducer);
  return reducer;
}, rootReducer);

export default composedReducer;
