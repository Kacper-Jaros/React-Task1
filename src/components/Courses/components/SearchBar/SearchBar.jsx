import styled from 'styled-components';
import React from 'react';
import { useState } from 'react/cjs/react.development';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { BUTTON_TEXT, INPUT_TEXT } from '../../../../constans';

const SearchBar = ({ setSearch }) => {
	const [filtered, setFiltered] = useState('');
	const handleSetFiltered = (e) => {
		setFiltered(e.target.value);
		if (!e.target.value) setSearch('');
	};

	const handleClick = () => {
		setSearch(filtered);
	};

	return (
		<>
			<Input
				placeholderText={INPUT_TEXT.SEARCH}
				handleOnChange={handleSetFiltered}
			/>
			<StyledButton buttonText={BUTTON_TEXT.SEARCH} handleClick={handleClick} />
		</>
	);
};

export default SearchBar;

const StyledButton = styled(Button)`
	margin-left: 20px;
`;
