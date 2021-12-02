import 'jest';
import { coursesReducer } from '../reducer';
import { SAVE_NEW_COURSE } from '../actionTypes';

const mockedState = {
	course: [
		{
			id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
			title: 'Angular',
			description: `Lorem Ipsum is simply dummy text of the printing and
       typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the
       1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
       specimen book.`,
			creationDate: '10/11/2020',
			duration: 210,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		},
	],
};

test(`reducer should return the initial state.`, () => {
	expect(coursesReducer(undefined, {})).toEqual([]);
});

test(` reducer should handle SAVE_NEW_COURSE and returns new state`, () => {
	const saveCourseAction = {
		type: SAVE_NEW_COURSE,
		payload: mockedState.course,
	};
	expect(coursesReducer([], saveCourseAction)).toEqual(mockedState.course);
});

test(` reducer should handle GET_COURSE and returns new state`, () => {
	const saveCourseAction = {
		type: 'GET_COURSE',
		payload: mockedState.course,
	};
	expect(coursesReducer([], saveCourseAction)).toEqual([]);
});
