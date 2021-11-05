export const searchCourse = (posts, query) => {
	if (!query) {
		return posts;
	}
	return posts.filter((post) => {
		const postName = post.title.toLowerCase();
		const postId = post.id.toLowerCase();
		const queryName = query.toLowerCase();
		return postName.includes(queryName) || postId.includes(queryName);
	});
};
