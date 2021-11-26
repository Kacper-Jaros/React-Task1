export const findAuthors = (currentAuthors, allAuthors, remove = false) =>
	allAuthors.filter((el) => {
		return remove
			? !currentAuthors.includes(el.id)
			: currentAuthors.includes(el.id);
	}) || [];

export const validateAuthors = (list) => {
	const names = list.map((el) => el.name);
	return names.toString();
};
