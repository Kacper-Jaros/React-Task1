import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const userLoginSucces = (user) => {
	return { type: LOGIN_SUCCESS, payload: user };
};

export const userLogout = (payload) => {
	return { type: LOGOUT, payload };
};
