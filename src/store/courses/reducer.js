import {
	SAVE_NEW_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
} from 'store/courses/actionTypes';

const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case SAVE_NEW_COURSE:
			if (Array.isArray(action.payload)) {
				return [...state, ...action.payload];
			} else return [...state, action.payload];
		case DELETE_COURSE:
			return state.filter((e) => e.id !== action.payload);
		case UPDATE_COURSE:
			return state.map((e) => {
				return e.id === action.payload.id ? { ...e, ...action.payload } : e;
			});
		default:
			return state;
	}
};
