import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState } from 'react';

import { Button } from 'common/Button/Button';
import { Input } from 'common/Input/Input';
import { BUTTON_TEXT, INPUT_TEXT } from 'constans';

export const SearchBar = ({ setSearch }) => {
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

SearchBar.propTypes = {
	setSearch: PropTypes.func,
};

const StyledButton = styled(Button)`
	margin-left: 20px;
`;
