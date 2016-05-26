import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { enableBatching } from 'redux-batched-actions';
import { routerReducer } from 'react-router-redux';

export default enableBatching(combineReducers({
    routing: routerReducer
}));
