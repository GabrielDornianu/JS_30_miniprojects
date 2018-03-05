var secretCode = 'gabi';
var inputKeys = [];

function updateArrayCode(theKey)
{
	inputKeys.push(theKey);
	if(inputKeys.length > 4) inputKeys.splice(0, 1);
	if(inputKeys.join('').includes(secretCode))
	{
		cornify_add();
	}
}

window.addEventListener('keyup', (e) => {updateArrayCode(e.key)});