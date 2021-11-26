import { SAVE_NEW_AUTHOR } from './actionTypes';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case SAVE_NEW_AUTHOR:
			if (Array.isArray(action.payload)) {
				return [...state, ...action.payload];
			} else return [...state, action.payload];
		default:
			return state;
	}
};
