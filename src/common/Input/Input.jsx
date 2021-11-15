import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = ({
	labelText,
	placeholderText,
	handleOnChange,
	value,
	type,
	className,
	name,
}) => {
	return (
		<Container>
			<label htmlFor='input'>{labelText}</label>
			<StyledInput
				type={type ?? 'text'}
				name={name}
				id='input'
				placeholder={placeholderText}
				onChange={handleOnChange}
				value={value}
				className={className}
			/>
		</Container>
	);
};

Input.propTypes = {
	className: PropTypes.string,
	handleOnChange: PropTypes.func,
	labelText: PropTypes.string,
	name: PropTypes.string,
	placeholderText: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.any,
};

const StyledInput = styled.input`
	background-color: transparent;
	border: 1px solid orange;
	padding: 5px 20px 5px 5px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
