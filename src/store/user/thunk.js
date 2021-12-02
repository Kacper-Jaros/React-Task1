import { userLoginSucces } from './actionCreators';
import { loginRequest, userMeRequest, getAllCourses } from 'servisces';
import { coursesSaveNewCourse } from 'store/courses/actionCreators';

export const loginUser = (email, password) => async (dispatch) => {
	const loginToken = await loginRequest(email, password);
	const userResponse = await userMeRequest(loginToken.result);

	dispatch(
		userLoginSucces({
			token: loginToken.result,
			name: userResponse.result.name,
			email: userResponse.result.email,
			role: userResponse.result.role,
		})
	);
};

// export const fillCourses = () => async (dispatch) => {
// 	const coursesData = await getAllCourses();

// 	dispatch(coursesSaveNewCourse(coursesData.data.result));
// };
