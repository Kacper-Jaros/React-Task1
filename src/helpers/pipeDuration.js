export const timeConvert = (time) => {
	let sec_num = time * 60;
	let hours = Math.floor(sec_num / 3600);
	let minutes = Math.floor((sec_num - hours * 3600) / 60);

	if (hours < 10) hours = '0' + hours;

	if (minutes < 10) minutes = '0' + minutes;

	return hours + ':' + minutes + ' hours';
};
