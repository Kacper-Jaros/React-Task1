import {
	coursesSaveNewCourse,
	coursesDeleteCourse,
	coursesUpdateCourses,
} from './actionCreators';
import {
	addCoursesRequest,
	deleteCoursesRequest,
	coursesPutRequest,
} from 'servisces';

export const createNewCourse = (newCourse) => async (dispatch) => {
	await addCoursesRequest(
		newCourse.title,
		newCourse.description,
		newCourse.duration,
		newCourse.authors
	);

	dispatch(coursesSaveNewCourse(newCourse));
};

export const updateCourse = (id, updatedData) => async (dispatch) => {
	const courseData = await coursesPutRequest(
		id,
		updatedData.title,
		updatedData.description,
		updatedData.duration,
		updatedData.authors
	);

	dispatch(coursesUpdateCourses(courseData.result));
};

export const deleteCourse = (id) => async (dispatch) => {
	await deleteCoursesRequest(id);

	dispatch(coursesDeleteCourse(id));
};
