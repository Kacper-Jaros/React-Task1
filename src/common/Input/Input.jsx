import styled from 'styled-components';

const Input = ({ labelText, placeholderText, handleOnChange, value, type }) => {
	return (
		<Container>
			<label htmlFor='input'>{labelText}</label>
			<StyledInput
				type={type ?? 'text'}
				id='input'
				placeholder={placeholderText}
				onChange={handleOnChange}
				value={value}
			/>
		</Container>
	);
};

export default Input;

const StyledInput = styled.input`
	background-color: transparent;
	border: 1px solid orange;
	padding: 5px 20px 5px 5px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
