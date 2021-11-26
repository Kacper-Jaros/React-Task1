import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authorsReducer } from './authors/reducer';
import { userReducer } from './user/reducer';
import { coursesReducer } from './courses/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	authorsReducer,
	userReducer,
	coursesReducer,
});

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunk))
);
