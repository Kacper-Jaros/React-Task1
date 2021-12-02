import { useRoutes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Header } from 'components/Header/Header';
import { Courses } from 'components/Courses/Courses';
import { CreateForm } from 'components/CreateCourse/CreateForm';
import { Registration } from 'components/Registration/Registration';
import { Login } from 'components/Login/Login';
import { CourseInfo } from 'components/CourseInfo/CourseInfo';
import { PrivateRoute } from 'components/PrivateRouter/PrivateRouter.jsx';

import './servisces.js';

const App = () => {
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	const role = useSelector((state) => state.userReducer.role);
	const [userRole, setUserRole] = useState('');
	const [userIsLogged, setUserIsLogger] = useState(null);
	useEffect(() => {
		setUserIsLogger(
			localStorage.getItem('user') && localStorage.getItem('token')
		);
	}, [isAuth, setUserIsLogger]);
	useEffect(() => {
		setUserRole(role);
	}, [role]);

	const routes = useRoutes(
		!userIsLogged
			? [
					{
						path: '/login',
						element: <Login />,
					},
					{
						path: '/registration',
						element: <Registration />,
					},
					{
						path: '*',
						element: <Navigate to='/login' />,
					},
			  ]
			: [
					{
						path: '/courses',
						element: <Courses userRole={userRole} />,
					},
					{
						path: '/courses/:id',
						element: <CourseInfo />,
					},
					{
						path: '/courses/add',
						element: (
							<PrivateRoute>
								<CreateForm />
							</PrivateRoute>
						),
					},
					{
						path: '/courses/update/:id',
						element: (
							<PrivateRoute>
								<CreateForm />
							</PrivateRoute>
						),
					},
					{
						path: '*',
						element: <Navigate to='/courses' />,
					},
			  ]
	);

	return (
		<>
			<Header userIsLogged={userIsLogged} />
			{routes}
		</>
	);
};
export default App;
