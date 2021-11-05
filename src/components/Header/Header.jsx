import styled from 'styled-components';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { BUTTON_TEXT, USER_NAME } from '../../constans';

const Header = () => {
	return (
		<HeaderContainer>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			<UserNameWrapper>{USER_NAME}</UserNameWrapper>
			<Button buttonText={BUTTON_TEXT.LOGOUT} />
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	border: 1px solid red;
	align-items: center;
	button {
		margin-right: 20px;
	}
`;

const UserNameWrapper = styled.div`
	margin-left: auto;
	margin-right: 20px;
`;

const LogoWrapper = styled.div`
	margin: 10px;
`;
