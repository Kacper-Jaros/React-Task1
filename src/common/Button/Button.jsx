import React from 'react';
import styled from 'styled-components';

const Button = ({ buttonText, handleClick, className }) => (
	<StyledButton className={className} onClick={handleClick}>
		{buttonText}
	</StyledButton>
);

export default Button;

const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid purple;
	padding: 5px 20px 5px 20px;
`;
