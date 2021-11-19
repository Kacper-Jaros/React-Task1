import { SAVE_NEW_COURSE, DELETE_COURSE, UPDATE_COURSE } from './actionTypes';

export const coursesSaveNewCourse = (newCourse) => {
	return { type: SAVE_NEW_COURSE, payload: newCourse };
};

export const coursesDeleteCourse = (payload) => {
	return { type: DELETE_COURSE, payload };
};

export const coursesUpdateCourses = (updatedCourse) => {
	return { type: UPDATE_COURSE, payload: updatedCourse };
};
