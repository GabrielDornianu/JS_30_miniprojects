var video = document.querySelector('.viewer');
var toggle = document.querySelector('.toggle');
var volumeControl = document.querySelector('.volume-control');
var progressBar = document.querySelector('.progress-bar');
var replay = document.querySelector('.replay');
var [moveForward, moveBackward] = [document.querySelector('.forward-5'), document.querySelector('.backward-5')];

function changeButton()
{
	video.paused ? toggle.innerHTML = ' >> ' : toggle.innerHTML = ' || ';
}

function togglePlay()
{
	video.paused ? video.play() : video.pause(); 
}

function changeVolume()
{
	var convertedVolume = parseFloat('0.' + (volumeControl.value / 1));
	if(volumeControl.value == 10) convertedVolume = 1;
	video.volume = convertedVolume;
}

function updateProgressBar()
{
	progressBar.value = Math.floor((100 / video.duration) * video.currentTime);
}

function changeProgress()
{
	video.currentTime = Math.floor((video.duration / 100) * progressBar.value);
}

function replayVideo()
{

}

function progressStep(direction)
{
	if(direction == 'forth')
	{
		video.currentTime += 2;
	}
	else if(direction == 'back')
	{
		video.currentTime -= 2;
	}
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('pause', changeButton);
video.addEventListener('play', changeButton)

volumeControl.addEventListener('mouseup', changeVolume);

video.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('mouseup', changeProgress);


replay.addEventListener('mouseup', replayVideo);

moveForward.addEventListener('mouseup', () => progressStep('forth'));
moveBackward.addEventListener('mouseup', () => progressStep('back'));
