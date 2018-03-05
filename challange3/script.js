console.log('Hello world');

function updateVariable(variableName, value, unit = '')
{
	document.documentElement.style.setProperty('--' + variableName, value + unit);
}

function addEventListeners()
{
	var inputFields = document.getElementsByTagName('input');
	Array.from(inputFields).forEach(function(input){
		input.addEventListener('change', function()
		{
			updateVariable(input.name, input.value, input.dataset.unit);
		});
	});
}

addEventListeners();