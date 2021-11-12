import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Button = ({ buttonText, handleClick, className }) => (
	<StyledButton className={className} onClick={handleClick}>
		{buttonText}
	</StyledButton>
);

Button.propTypes = {
	buttonText: PropTypes.string,
	className: PropTypes.string,
	handleClick: PropTypes.func,
};

const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid purple;
	padding: 5px 20px 5px 20px;
`;
