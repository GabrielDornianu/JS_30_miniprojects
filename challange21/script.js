const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
	console.log(data);
	speed.textContent = data.coords.speed;
	arrow.style.transform = `rotate(${data.coords.heading}deg)`;
	// Doesnt work because speed and heading are null when im standing;
}, (err) => {
	console.log('Error ocurred: you have to accept geolocation');
});