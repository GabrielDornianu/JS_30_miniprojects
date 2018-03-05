var dataElements = document.getElementsByClassName('sound-button');


function playAnimation(code)
{
	for(let i = 0; i < dataElements.length; i++)
	{
		if(dataElements[i].dataset.sound == code)
		{
			dataElements[i].className += ' animated-button';
			setTimeout(function(){
				console.log('It should cut the string now');
				dataElements[i].className = 'sound-button';
			}, 100);
		}
	}
}

function playSound(soundfilename)
{
	var audio = new Audio('sounds/' + soundfilename + '.wav');
	audio.play();
}

function makeSound(keyCode)
{
	switch (keyCode) {
		case 65:
			playSound('boom');
			break; return;
		case 83:
			playSound('clap');
			break; return;
		case 68:
			playSound('hihat');
			break; return;
		case 70:
			playSound('kick');
			break; return;
		case 71:
			playSound('openhat');
			break; return;
		case 72:
			playSound('ride');
			break; return;
		case 74:
			playSound('snare');
			break; return;
		case 75:
			playSound('tink');
			break; return;
		case 76:
			playSound('tom');
			break; return;
		default:
			break; return;
	}
}

function playAnimationAndSound(code)
{
	playAnimation(code);
	makeSound(code);
}

function addEventOnElements(elements)
{
	for(let i = 0; i < dataElements.length; i++)
	{
		dataElements[i].addEventListener('click', function() {
			playAnimationAndSound(parseInt(dataElements[i].dataset.sound));
		});
	}
}

addEventOnElements(dataElements);

document.addEventListener('keydown', function() {
	playAnimationAndSound(event.keyCode);
});
