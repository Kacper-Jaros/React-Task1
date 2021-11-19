import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'common/Input/Input';
import { Button } from 'common/Button/Button';
import { Textarea } from 'common/Textarea/Textarea';
import {
	INPUT_TEXT,
	BUTTON_TEXT,
	LABEL_TEXT,
	TEXTAREA_TEXT,
	CREATE_COURSE,
} from 'constans';

import { timeConvert } from 'helpers/pipeDuration';
import { newDate } from 'helpers/dateGeneratop';
import { coursesSaveNewCourse } from 'store/courses/actionCreators';
import { authorsSaveNewAuthor } from 'store/authors/actionCreators';
import { getAuthorsList } from 'selectors';

export const CreateCourse = () => {
	const authorList = useSelector(getAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [authors, setAuthors] = useState(authorList);
	const [addNewAuthor, setAddNewAuhtor] = useState('');
	const [duration, setDuration] = useState(null);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const blockInvalidChar = (e) =>
		['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

	const handleAddAuthor = (name, id) => {
		const newElement = { id: id, name: name };
		setCourseAuthors([...courseAuthors, newElement]);

		setAuthors(authors.filter((item) => item.name !== name));
	};

	const handleDeleteAuthor = (name, id) => {
		const newElement = { id: id, name: name };
		setAuthors([...authors, newElement]);

		setCourseAuthors(courseAuthors.filter((item) => item.name !== name));
	};

	const handleNewAuthor = useCallback((e) => {
		setAddNewAuhtor(e.target.value);
	}, []);

	const handleCreateNewAuthor = () => {
		const newElement = { id: uuidv4(), name: addNewAuthor };

		setAuthors([...authors, newElement]);
		setAddNewAuhtor('');
		dispatch(authorsSaveNewAuthor(newElement));
	};

	const handleTitle = useCallback((e) => {
		setTitle(e.target.value);
	}, []);

	const handleDescription = useCallback((e) => {
		setDescription(e.target.value);
	}, []);

	const handleDuration = useCallback((e) => {
		setDuration(e.target.value);
	}, []);
	const handleCreateCourse = () => {
		if (title === '' || !title) {
			alert(CREATE_COURSE.EMPTY.TITLE);
			return;
		}
		if (description === '' || !description) {
			alert(CREATE_COURSE.EMPTY.DESCRIPTION);
			return;
		}
		if (duration === '' || !duration) {
			alert(CREATE_COURSE.EMPTY.DURATION);
			return;
		}
		if (courseAuthors.length === 0) {
			alert(CREATE_COURSE.EMPTY.COURSE_AUTHORS);
			return;
		}

		const newElement = {
			id: uuidv4(),
			title: title,
			description: description,
			creationDate: newDate(),
			duration: duration,
			authors: courseAuthors.map((el) => el.id),
		};

		dispatch(coursesSaveNewCourse(newElement));

		navigate('/courses');
	};

	return (
		<Container>
			<Title>
				<Input
					placeholderText={INPUT_TEXT.CREATE}
					labelText={LABEL_TEXT.TITLE}
					value={title || ''}
					handleOnChange={handleTitle}
				/>
				<CreateCourseButton
					buttonText={BUTTON_TEXT.CREATE}
					handleClick={handleCreateCourse}
				/>
			</Title>
			<Description>
				<StyledTextarea
					placeholderText={TEXTAREA_TEXT.DESCRIPTION}
					labelText={LABEL_TEXT.DESCRIPTION}
					value={description || ''}
					handleOnChange={handleDescription}
				/>
			</Description>
			<Create>
				<NewAuthorAndDuration>
					<StyledH3>{CREATE_COURSE.ADD_AUTHOR}</StyledH3>
					<Input
						placeholderText={INPUT_TEXT.AUTHOR}
						labelText={LABEL_TEXT.AUTHOR}
						value={addNewAuthor || ''}
						handleOnChange={handleNewAuthor}
					/>
					<CreateAuthorButton
						buttonText={BUTTON_TEXT.CREATE_AUTHOR}
						handleClick={handleCreateNewAuthor}
					/>
					<StyledH3>{CREATE_COURSE.DURATION}</StyledH3>
					<Input
						placeholderText={INPUT_TEXT.DURATION}
						labelText={LABEL_TEXT.DURATION}
						value={duration || ''}
						handleOnChange={handleDuration}
						onKeyDown={blockInvalidChar}
						type='number'
					/>
					<text>
						{CREATE_COURSE.DURATION}: {timeConvert(duration)}
					</text>
				</NewAuthorAndDuration>
				<Authors>
					<StyledH3>{CREATE_COURSE.AUTHORS}</StyledH3>
					{authors.map((el) => (
						<SingleAuthor key={el.id}>
							<text>{el.name}</text>
							<Button
								buttonText={BUTTON_TEXT.ADD_AUTHOR}
								handleClick={() => handleAddAuthor(el.name, el.id)}
							/>
						</SingleAuthor>
					))}
					<StyledH3>{CREATE_COURSE.COURSE_AUTHORS}</StyledH3>
					{!courseAuthors.length ? (
						<EmptyList>{CREATE_COURSE.EMPTY.AUTHOR}</EmptyList>
					) : (
						courseAuthors.map((el) => (
							<SingleAuthor key={el.id}>
								<text>{el.name}</text>
								<Button
									buttonText={BUTTON_TEXT.DELETE_AUTHOR}
									handleClick={() => handleDeleteAuthor(el.name, el.id)}
								/>
							</SingleAuthor>
						))
					)}
				</Authors>
			</Create>
		</Container>
	);
};

CreateCourse.propTypes = {
	setView: PropTypes.func,
};

const Container = styled.div`
	display: flex;
	border: 1px solid blue;
	flex-direction: column;
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	margin: 20px;
	justify-content: space-between;
`;

const Create = styled.div`
	display: flex;
	flex-direction: row;
	border: 1px solid black;
	margin: 20px;
`;

const NewAuthorAndDuration = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 20px;
`;

const Authors = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 20px;
`;

const SingleAuthor = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 10px;
`;

const Description = styled.div`
	margin: 20px;
`;

const CreateAuthorButton = styled(Button)`
	align-self: center;
	margin-top: 20px;
`;

const StyledH3 = styled.h3`
	align-self: center;
`;

const StyledTextarea = styled(Textarea)`
	border: 1px solid yellow;
`;

const CreateCourseButton = styled(Button)`
	height: 50%;
	align-self: flex-end;
`;

const EmptyList = styled.div`
	align-self: center;
`;
