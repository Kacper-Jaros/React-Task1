import 'jest';
import { Courses } from '../Courses';
import { Route, Router, Routes } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { CreateForm } from 'components/CreateCourse/CreateForm';

const mockedState = {
	userReducer: {
		isAUth: true,
		name: 'Test Name',
	},
	coursesReducer: [
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
	authorsReducer: [
		{
			id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			name: 'Vasiliy Dobkin',
		},
	],
};

const mockedStateTwo = { coursesReducer: [] };

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

const mockedStoreTwo = {
	getState: () => mockedStateTwo,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
test(`Courses should display amount of CourseCard equal length of courses array.`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	const { getAllByText } = render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<Courses userRole={'user'} />
			</Provider>
		</Router>
	);

	expect(getAllByText('Show course')).toHaveLength(1);
});

test(`Courses should display Empty container if courses array length is 0.`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStoreTwo}>
				<Courses userRole={'user'} />
			</Provider>
		</Router>
	);

	expect(screen.queryByTestId('courses-card')).toEqual(null);
});

test(`CourseForm should be showed after a click on a button "Add new course".`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	const { rerender } = render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStoreTwo}>
				<Routes>
					<>
						<Route path='/courses' element={<Courses userRole={'admin'} />} />
						<Route path='/courses/add' element={<CreateForm />} />
					</>
				</Routes>
			</Provider>
		</Router>
	);

	const button = screen.getByTestId('add-new-course-button');
	fireEvent(
		button,
		new MouseEvent('click', { bubbles: true, cancelable: true })
	);

	rerender(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStoreTwo}>
				<Routes>
					<>
						<Route path='/courses' element={<Courses userRole={'admin'} />} />
						<Route path='/courses/add' element={<CreateForm />} />
					</>
				</Routes>
			</Provider>
		</Router>
	);

	expect(screen.getByTestId('add-new-course-button')).toBeInTheDocument();
});
