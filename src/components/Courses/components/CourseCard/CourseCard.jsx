import styled from 'styled-components';

import Button from '../../../../common/Button/Button';
import { COURSE_CARD_FIELD, BUTTON_TEXT } from '../../../../constans';

import { validateAuthors } from '../../../../helpers/authors';
import { timeConvert } from '../../../../helpers/pipeDuration';

const CourseCard = ({ title, duration, destription, authors, created }) => {
	const names = validateAuthors(authors);
	const time = timeConvert(duration);
	return (
		<CourseCardContainer>
			<TitelAndDesscription>
				<StyledTitle>{title}</StyledTitle>
				<StyledDescription>{destription}</StyledDescription>
			</TitelAndDesscription>
			<AuthorsAndButton>
				<div>
					<TextField>{COURSE_CARD_FIELD.AUTHORS}: </TextField>
					<text>{names}</text>
				</div>
				<div>
					<TextField>{COURSE_CARD_FIELD.DURATION}: </TextField>
					<text>{time}</text>
				</div>
				<div>
					<TextField>{COURSE_CARD_FIELD.CREATED}: </TextField>
					<text>{created}</text>
				</div>
				<StyledButton buttonText={BUTTON_TEXT.SHOW_COURSE} />
			</AuthorsAndButton>
		</CourseCardContainer>
	);
};

export default CourseCard;

const CourseCardContainer = styled.div`
	display: flex;
	border: 1px solid green;
	padding: 20px;
	margin: 20px;
`;

const TitelAndDesscription = styled.div`
	width: 70%;
`;
const AuthorsAndButton = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
`;

const StyledTitle = styled.div`
	font-weight: bold;
	font-size: x-large;
`;

const StyledDescription = styled.div`
	font-size: medium;
`;

const TextField = styled.text`
	font-weight: bold;
`;

const StyledButton = styled(Button)`
	align-self: center;
	margin-top: 20px;
`;
