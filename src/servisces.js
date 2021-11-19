import axios from 'axios';
import { store } from 'store/index.js';

import { coursesSaveNewCourse } from 'store/courses/actionCreators';
import { authorsSaveNewAuthor } from 'store/authors/actionCreators';

const getAllCourses = () => {
	const dispatch = store.dispatch;
	axios
		.get('http://localhost:3000/courses/all')
		.then((response) => dispatch(coursesSaveNewCourse(response.data.result)))
		.catch((err) => console.warn(err));
};

const getAllAuthors = () => {
	const dispatch = store.dispatch;
	axios
		.get('http://localhost:3000/authors/all')
		.then((response) => dispatch(authorsSaveNewAuthor(response.data.result)))
		.catch((err) => console.warn(err));
};

getAllCourses();
getAllAuthors();
