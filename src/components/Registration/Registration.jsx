import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import axios from 'axios';

import { Input } from 'common/Input/Input';
import { Button } from 'common/Button/Button';

import { LABEL_TEXT, INPUT_TEXT, BUTTON_TEXT, TEXT } from 'constans';

export const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleInputChange = useCallback(
		(e) => {
			if (e.target.name === INPUT_TEXT.REGISTRATION.NAME) {
				setName(e.target.value);
			} else if (e.target.name === INPUT_TEXT.REGISTRATION.EMAIL) {
				setEmail(e.target.value);
			} else if (e.target.name === INPUT_TEXT.REGISTRATION.PASSWORD) {
				setPassword(e.target.value);
			} else return;
		},
		[name, email, password]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post('http://localhost:3000/register', {
				name: name,
				email: email,
				password: password,
			})
			.then(() => navigate('/login'))
			.catch((err) => console.warn(err));
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledH2>{TEXT.REGISTRATION}</StyledH2>
			<ItemContainer>
				<Input
					name={INPUT_TEXT.REGISTRATION.NAME}
					labelText={LABEL_TEXT.NAME}
					placeholderText={INPUT_TEXT.NAME}
					value={name || ''}
					handleOnChange={handleInputChange}
				/>
			</ItemContainer>
			<ItemContainer>
				<Input
					name={INPUT_TEXT.REGISTRATION.EMAIL}
					labelText={LABEL_TEXT.EMAIL}
					placeholderText={INPUT_TEXT.EMAIL}
					value={email || ''}
					handleOnChange={handleInputChange}
				/>
			</ItemContainer>
			<ItemContainer>
				<Input
					name={INPUT_TEXT.REGISTRATION.PASSWORD}
					labelText={LABEL_TEXT.PASSWORD}
					placeholderText={INPUT_TEXT.PASSWORD}
					value={password || ''}
					handleOnChange={handleInputChange}
					type='password'
				/>
			</ItemContainer>
			<StyledButton
				type={BUTTON_TEXT.TYPE.SUBMIT}
				buttonText={BUTTON_TEXT.REGISTRATION}
			/>
			<StyledText>
				{TEXT.REGISTRATION_COMMENATRY} <Link to='/login'>{TEXT.LOGIN}</Link>
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
