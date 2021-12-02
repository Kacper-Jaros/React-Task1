import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from 'common/Button/Button';
import { BUTTON_TEXT } from 'constans';

import { findAuthors } from 'helpers/authors';
import { searchCourse } from 'helpers/searchCourse';
import { getCoursesList, getAuthorsList } from 'selectors';

export const Courses = ({ userRole }) => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/courses/add');
	};
	const coursesList = useSelector(getCoursesList);
	const authorsList = useSelector(getAuthorsList);

	return (
		<Container>
			<SearchBarAndButton>
				<SearchBar setSearch={setSearch} />
				{userRole.toLowerCase() === 'admin' ? (
					<div data-testid='add-new-course-button'>
						<StyledButton
							buttonText={BUTTON_TEXT.ADD_NEW_COURSE}
							handleClick={handleClick}
						/>
					</div>
				) : null}
			</SearchBarAndButton>
			{searchCourse(coursesList, search).map((courses) => (
				<CourseCard
					key={courses.id}
					title={courses.title}
					duration={courses.duration}
					destription={courses.description}
					authors={findAuthors(courses.authors, authorsList)}
					created={courses.creationDate}
					id={courses.id}
					userRole={userRole}
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
