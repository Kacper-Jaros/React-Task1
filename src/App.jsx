import { useRoutes, Navigate } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Courses } from 'components/Courses/Courses';
import { CreateCourse } from 'components/CreateCourse/CreateCourse';
import { Registration } from 'components/Registration/Registration';
import { Login } from 'components/Login/Login';
import { CourseInfo } from 'components/CourseInfo/CourseInfo';

import './servisces.js';

const App = () => {
	const userIsLogged =
		localStorage.getItem('user') && localStorage.getItem('token');
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
