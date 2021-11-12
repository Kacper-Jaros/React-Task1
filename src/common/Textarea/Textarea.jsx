import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Textarea = ({
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

Textarea.propTypes = {
	className: PropTypes.string,
	handleOnChange: PropTypes.func,
	labelText: PropTypes.string,
	placeholderText: PropTypes.string,
	value: PropTypes.any,
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
