export const findAuthors = (list, authors) => {
	return authors.filter((el) => list.authors.includes(el.id));
};

export const validateAuthors = (list) => {
	const names = list.map((el) => el.name);
	return names.toString();
};
