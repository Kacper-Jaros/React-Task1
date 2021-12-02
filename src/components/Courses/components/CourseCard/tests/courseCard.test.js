import 'jest';
import { CourseCard } from '../CourseCard';
import { Router } from 'react-router';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

const mockedState = {
	userReducer: {
		isAUth: true,
		name: 'Test Name',
	},
	coursesReducer: [],
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

test(`CourseCard should display title.`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CourseCard
					title={'title'}
					authors={mockedState.authorsReducer}
					userRole={'user'}
				/>
			</Provider>
		</Router>
	);

	expect(screen.queryByText('title')).toBeInTheDocument();
});

test(`CourseCard should display description.`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CourseCard
					title={'title'}
					destription={'description'}
					authors={mockedState.authorsReducer}
					userRole={'user'}
				/>
			</Provider>
		</Router>
	);

	expect(screen.queryByText('description')).toBeInTheDocument();
});

test(`CourseCard should display duration in the correct format.`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CourseCard
					title={'title'}
					duration={70}
					destription={'description'}
					authors={mockedState.authorsReducer}
					userRole={'user'}
				/>
			</Provider>
		</Router>
	);

	expect(screen.queryByText('01:10 hours')).toBeInTheDocument();
});

test(`CourseCard should display authors list.`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CourseCard
					title={'title'}
					authors={mockedState.authorsReducer}
					userRole={'user'}
				/>
			</Provider>
		</Router>
	);

	expect(screen.queryByText('Vasiliy Dobkin')).toBeInTheDocument();
});

test(`CourseCard should display created date in the correct format.`, () => {
	const history = createMemoryHistory();
	history.push('/courses');

	render(
		<Router location={history.location} navigator={history}>
			<Provider store={mockedStore}>
				<CourseCard
					title={'title'}
					duration={70}
					destription={'description'}
					authors={mockedState.authorsReducer}
					userRole={'user'}
					created={'01.02.2018'}
				/>
			</Provider>
		</Router>
	);

	expect(screen.queryByText('01.02.2018')).toBeInTheDocument();
});
