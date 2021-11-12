import { useRoutes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Header } from 'components/Header/Header';
import { Courses } from 'components/Courses/Courses';
import { CreateCourse } from 'components/CreateCourse/CreateCourse';
import { Registration } from 'components/Registration/Registration';
import { Login } from 'components/Login/Login';
import { CourseInfo } from 'components/CourseInfo/CourseInfo';

const App = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState('');
	const [token, setToken] = useState('');
	const routes = useRoutes([
		{ path: '/', element: '' },
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/registration',
			element: <Registration />,
		},
		{
			path: '/courses',
			element: <Courses />,
		},
		{
			path: '/courses/:id',
			element: <CourseInfo />,
		},
		{
			path: '/courses/add',
			element: <CreateCourse />,
		},
	]);

	useEffect(() => {
		let localUser = localStorage.getItem('user');
		let localToken = localStorage.getItem('token');
		if (user && !localUser && token && !localToken) {
			localStorage.setItem('user', user);
			localStorage.setItem('token', token);
		}
		if (localUser && localToken) {
			setUser(localUser);
			setToken(localToken);
		}
		localUser = localStorage.getItem('user');
		localToken = localStorage.getItem('token');
		if (!localUser || !localToken) {
			navigate('/login');
		} else if (!!localUser && !!localToken) {
			navigate('/courses');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, token]);
	return (
		<>
			<Header />
			{routes}
		</>
	);
};
export default App;
