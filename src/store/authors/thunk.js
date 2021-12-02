import { authorsSaveNewAuthor } from './actionCreators';
import { addAuthorRequest } from 'servisces';
import { getAllAuthors } from 'servisces';

export const createAuthor = (newAuthor) => async (dispatch) => {
	await addAuthorRequest(newAuthor.name);

	dispatch(authorsSaveNewAuthor(newAuthor));
};

// export const fillAuthors = () => async (dispatch) => {
// 	const authorsData = await getAllAuthors();

// 	dispatch(authorsSaveNewAuthor(authorsData.data.result));
// };
