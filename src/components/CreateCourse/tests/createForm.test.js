import 'jest';
import { Router } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { CreateForm } from '../CreateForm';
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

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test(`CourseForm should show authors lists (all and course authors).`, () => {
	const history = createMemoryHistory();
	history.push('/courses/add');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CreateForm />
			</Provider>
		</Router>
	);

	expect(screen.getAllByTestId('authors')).toHaveLength(1);
});

test(`CourseForm 'Create author' click button should call dispatch.`, () => {
	const history = createMemoryHistory();
	history.push('/courses/add');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CreateForm />
			</Provider>
		</Router>
	);

	const authorName = screen.getByPlaceholderText('Enter author name...');
	authorName.value = 'Jan Kowalski';
	fireEvent.click(screen.getByText('Create author'));
	expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
});

test(`CourseForm 'Add author' button click should add an author to course authors list.`, () => {
	const history = createMemoryHistory();
	history.push('/courses/add');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CreateForm />
			</Provider>
		</Router>
	);

	fireEvent.click(screen.getByText('Add author'));
	expect(screen.getAllByText('Delete author')).toHaveLength(1);
});

test(`CourseForm 'Delete author' button click should delete an author from the course list.`, () => {
	const history = createMemoryHistory();
	history.push('/courses/add');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CreateForm />
			</Provider>
		</Router>
	);

	fireEvent.click(screen.getByText('Add author'));
	fireEvent.click(screen.getByText('Delete author'));
	expect(screen.getAllByText('Add author')).toHaveLength(1);
});
