import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Logo } from './components/Logo/Logo';
import { Button } from 'common/Button/Button';

import { BUTTON_TEXT } from 'constans';

export const Header = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		navigate('/login');
	};
	return (
		<HeaderContainer>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			{localStorage.getItem('token') ? (
				<>
					<UserNameWrapper>{localStorage.getItem('user')}</UserNameWrapper>
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
