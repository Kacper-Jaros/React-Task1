import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

import { mockedCoursesList, mockedAuthorsList, COURSE_INFO } from 'constans';

import { findAuthors } from 'helpers/authors';
import { timeConvert } from 'helpers/pipeDuration';

export const CourseInfo = () => {
	const { id } = useParams();
	const courseData = mockedCoursesList.find((e) => e.id === id);
	const authors = findAuthors(courseData, mockedAuthorsList);
	return (
		<Container>
			<Link to={'/courses'}>{COURSE_INFO.BACK}</Link>
			<Title>{courseData.title}</Title>
			<Data>
				<Description>{courseData.description}</Description>
				<Info>
					<Item>
						<b>{COURSE_INFO.ID}</b>
						<text>{id}</text>
					</Item>
					<Item>
						<b>{COURSE_INFO.DURATION}</b>
						<text>{timeConvert(courseData.duration)}</text>
					</Item>
					<Item>
						<b>{COURSE_INFO.CREATED}</b>
						<text>{courseData.creationDate}</text>
					</Item>
					<Authors>
						<b>{COURSE_INFO.AUTHORS}</b>
						{authors.map((e) => (
							<text key={e.id}>{e.name}</text>
						))}
					</Authors>
				</Info>
			</Data>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border: solid 1px blue;
`;

const Data = styled.div`
	display: flex;
	flex-direction: row;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	align-items: center;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	align-items: left;
	margin-left: 100px;
`;

const Title = styled.h1`
	display: flex;
	align-self: center;
`;

const Item = styled.div`
	margin-bottom: 10px;
`;

const Authors = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
`;
