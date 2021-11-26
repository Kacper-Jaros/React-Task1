import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

const userInitalState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (state = userInitalState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				isAuth: true,
				...action.payload,
			};
		case LOGOUT:
			localStorage.clear();
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		default:
			return state;
	}
};
