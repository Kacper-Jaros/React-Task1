import { combineReducers, createStore } from 'redux';

import { authorsReducer } from './authors/reducer';
import { userReducer } from './user/reducer';
import { coursesReducer } from './courses/reducer';

const rootReducer = combineReducers({
	authorsReducer,
	userReducer,
	coursesReducer,
});

export const store = createStore(rootReducer);
