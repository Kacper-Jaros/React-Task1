import styled from 'styled-components';

const Textarea = ({
	labelText,
	placeholderText,
	handleOnChange,
	value,
	className,
}) => {
	return (
		<Container>
			<label htmlFor='textarea'>{labelText}</label>
			<textarea
				id='textarea'
				placeholder={placeholderText}
				onChange={handleOnChange}
				value={value}
				className={className}
				cols='30'
				rows='8'
			/>
		</Container>
	);
};

export default Textarea;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
