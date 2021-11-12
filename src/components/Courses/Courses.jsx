import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from 'common/Button/Button';
import { mockedAuthorsList, mockedCoursesList, BUTTON_TEXT } from 'constans';

import { findAuthors } from 'helpers/authors';
import { searchCourse } from 'helpers/searchCourse';

export const Courses = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/courses/add');
	};
	return (
		<Container>
			<SearchBarAndButton>
				<SearchBar setSearch={setSearch} />
				<StyledButton
					buttonText={BUTTON_TEXT.ADD_NEW_COURSE}
					handleClick={handleClick}
				/>
			</SearchBarAndButton>
			{searchCourse(mockedCoursesList, search).map((courses) => (
				<CourseCard
					key={courses.id}
					title={courses.title}
					duration={courses.duration}
					destription={courses.description}
					authors={findAuthors(courses, mockedAuthorsList)}
					created={courses.creationDate}
					id={courses.id}
				/>
			))}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid blue;
`;

const SearchBarAndButton = styled.div`
	display: flex;
	flex-direction: row;
	margin: 20px 20px 0 20px;
`;

const StyledButton = styled(Button)`
	margin-left: auto;
`;
