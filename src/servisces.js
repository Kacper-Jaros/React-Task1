import axios from 'axios';
import { store } from 'store/index.js';

import { coursesSaveNewCourse } from 'store/courses/actionCreators';
import { authorsSaveNewAuthor } from 'store/authors/actionCreators';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000/',
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');

	config.headers.Authorization = token;

	return config;
});

export const getAllCourses = () => {
	const dispatch = store.dispatch;
	axiosInstance
		.get('/courses/all')
		.then((response) => dispatch(coursesSaveNewCourse(response.data.result)))
		.catch((err) => console.warn(err));
};

export const getAllAuthors = () => {
	const dispatch = store.dispatch;
	axiosInstance
		.get('/authors/all')
		.then((response) => dispatch(authorsSaveNewAuthor(response.data.result)))
		.catch((err) => console.warn(err));
};

export const loginRequest = async (email, password) => {
	try {
		const response = await axiosInstance.post('/login', {
			email: email,
			password: password,
		});

		localStorage.setItem('token', response.data.result);
		localStorage.setItem('user', response.data.user.name);

		return response.data;
	} catch (err) {
		console.warn(err);
	}
};

export const userMeRequest = async (authorizationToken) => {
	try {
		const response = await axiosInstance.get('/users/me', {
			headers: {
				Authorization: authorizationToken,
			},
		});
		return response.data;
	} catch (err) {
		console.warn(err);
	}
};

export const addCoursesRequest = async (
	title,
	description,
	duration,
	authors
) => {
	try {
		const response = await axiosInstance.post('/course/add', {
			title: title,
			description: description,
			duration: duration,
			authors: authors,
		});
		return response.data;
	} catch (err) {
		console.warn(err);
	}
};

export const coursesPutRequest = async (
	id,
	title,
	description,
	duration,
	authors
) => {
	try {
		console.log(id, title, description, duration, authors);
		const response = await axiosInstance.put(`/courses/${id}`, {
			title: title,
			description: description,
			duration: Number(duration),
			authors: authors,
		});
		return response.data;
	} catch (err) {
		console.warn(err);
	}
};

export const addAuthorRequest = async (name) => {
	try {
		const response = await axiosInstance.post('/authors/add', {
			name: name,
		});
		return response.data;
	} catch (err) {
		console.warn(err);
	}
};

export const deleteCoursesRequest = async (id) => {
	try {
		const response = await axiosInstance.delete(`/course/${id}`);
		return response.data;
	} catch (err) {
		console.warn(err);
	}
};

export const logoutRequest = async (authorizationToken) => {
	try {
		const response = await axiosInstance.delete('/logout', {
			headers: {
				Authorization: authorizationToken,
			},
		});
		return response.data;
	} catch (err) {
		console.warn(err);
	}
};

getAllCourses();
getAllAuthors();
