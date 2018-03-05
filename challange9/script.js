console.time('counting_time');
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('counting_time');
		console.log(data);
});