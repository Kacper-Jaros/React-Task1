import 'jest';
import { Provider } from 'react-redux';
import { Header } from '../Header';
import { render, screen } from '@testing-library/react';

test(`Header should have logo and user's name.`, () => {
	const mockedState = {
		userReducer: {
			isAUth: true,
			name: 'Test Name',
		},
		coursesReducer: [],
		authorsReducer: [],
	};

	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};
	render(
		<Provider store={mockedStore}>
			<Header userIsLogged={true} />
		</Provider>
	);
	expect(screen.queryByText(mockedState.userReducer.name)).toBeInTheDocument();
	expect(screen.getByTestId('logo')).toBeInTheDocument();
});
