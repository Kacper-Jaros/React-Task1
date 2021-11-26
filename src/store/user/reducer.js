import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

const userInitalState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitalState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				isAuth: true,
				name: action.payload.user.name,
				email: action.payload.user.email,
				token: action.payload.result,
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
