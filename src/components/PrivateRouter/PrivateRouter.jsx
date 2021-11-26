import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
	const role = useSelector((state) => state.userReducer.role);
	const isAdmin = role.toLowerCase() === 'admin';
	const navigate = useNavigate();

	return isAdmin ? children : navigate('/courses');
};
