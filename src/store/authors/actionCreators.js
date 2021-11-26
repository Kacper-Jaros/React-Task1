import { SAVE_NEW_AUTHOR } from './actionTypes';

export const authorsSaveNewAuthor = (newAuthor) => {
	return { type: SAVE_NEW_AUTHOR, payload: newAuthor };
};
