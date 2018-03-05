const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"').value;

function populateVoices()
{
	voices = this.getVoices();
	voicesDropdown.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`).join('');
}

function toggle()
{
	speechSynthesis.cancel();
	speechSynthesis.speak(msg);
}

function changeVoice(startOver = true)
{
	msg.voice = voices.find(voice => voice.name === this.value);
	if(startOver)
	{
		toggle();
	}
}

function setOption()
{
	console.log(this.name + ' ' + this.value);
	msg[this.name] = this.value;
	toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);	
voicesDropdown.addEventListener('change', changeVoice);
options.forEach((option) => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));