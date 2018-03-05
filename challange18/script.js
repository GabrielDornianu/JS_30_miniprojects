const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
	.map(node => node.dataset.time)
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':').map(parseFloat);
		return (mins * 60) + secs;
	})
	.reduce((total, seconds) => {
		return total += seconds;
	}, 0);

	var hours = Math.floor(seconds / 3600);
	var leftSecs = seconds % 3600;
	var minutes = Math.floor(leftSecs / 60);
	leftSecs = leftSecs % 60;

	console.log(hours + ' : ' + minutes + ' : ' + leftSecs);