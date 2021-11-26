import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Logo } from './components/Logo/Logo';
import { Button } from 'common/Button/Button';

import { BUTTON_TEXT } from 'constans';
import { userLogout } from 'store/user/actionCreators';
import { getUserName } from 'selectors';
import { logoutRequest } from 'servisces';

export const Header = ({ userIsLogged }) => {
	const navigate = useNavigate();
	const userName = useSelector(getUserName);
	const userToken = useSelector((state) => state.userReducer.token);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(userLogout());
		logoutRequest(userToken);
		navigate('/login');
	};
	return (
		<HeaderContainer>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			{userIsLogged ? (
				<>
					<UserNameWrapper>{userName}</UserNameWrapper>
					<Button buttonText={BUTTON_TEXT.LOGOUT} handleClick={handleLogout} />
				</>
			) : null}
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	border: 1px solid red;
	align-items: center;
	button {
		margin-right: 20px;
	}
	margin-bottom: 20px;
`;

const UserNameWrapper = styled.div`
	margin-left: auto;
	margin-right: 20px;
`;

const LogoWrapper = styled.div`
	margin: 10px;
`;
