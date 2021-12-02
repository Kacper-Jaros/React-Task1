import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Input } from 'common/Input/Input';
import { Button } from 'common/Button/Button';

import { LABEL_TEXT, INPUT_TEXT, BUTTON_TEXT, TEXT } from 'constans';
import { loginUser } from 'store/user/thunk';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleInputChange = useCallback((e) => {
		if (e.target.name === INPUT_TEXT.REGISTRATION.EMAIL) {
			setEmail(e.target.value);
		} else if (e.target.name === INPUT_TEXT.REGISTRATION.PASSWORD) {
			setPassword(e.target.value);
		} else return;
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(email, password));
		navigate('/courses');
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledH2>{TEXT.LOGIN}</StyledH2>
			<ItemContainer>
				<Input
					name={INPUT_TEXT.LOGIN.EMAIL}
					labelText={LABEL_TEXT.EMAIL}
					placeholderText={INPUT_TEXT.EMAIL}
					value={email || ''}
					handleOnChange={handleInputChange}
				/>
			</ItemContainer>
			<ItemContainer>
				<Input
					name={INPUT_TEXT.LOGIN.PASSWORD}
					labelText={LABEL_TEXT.PASSWORD}
					placeholderText={INPUT_TEXT.PASSWORD}
					value={password || ''}
					handleOnChange={handleInputChange}
					type='password'
				/>
			</ItemContainer>
			<StyledButton
				type={BUTTON_TEXT.TYPE.SUBMIT}
				buttonText={BUTTON_TEXT.LOGIN}
			/>
			<StyledText>
				{TEXT.LOGIN_COMMENTARY}
				<Link to='/registration'>{TEXT.REGISTRATION}</Link>
			</StyledText>
		</StyledForm>
	);
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid aqua;
`;

const ItemContainer = styled.div`
	margin-top: 15px;
`;

const StyledText = styled.span`
	margin-top: 10px;
`;

const StyledH2 = styled.h2`
	margin-top: 10px;
`;

const StyledButton = styled(Button)`
	margin-top: 20px;
`;
