export const newDate = () => {
	let toDay = new Date();
	return (
		toDay.getDate() + '/' + (toDay.getMonth() + 1) + '/' + toDay.getFullYear()
	);
};
