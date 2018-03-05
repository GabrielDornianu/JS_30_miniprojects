const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
var bandsDiv = document.querySelector('.band-list');

function splitString(string)
{
	var words = string.split(' ');
	return words;
}

function removeArticles(array)
{
	var cleanArray = array.map((index, i) => {
		var splitIndex = splitString(index);
		if(splitIndex[0] == 'A' || splitIndex[0] == 'An' || splitIndex[0] == 'The')
		{
			index = splitIndex.splice(1).join(' ');
		}
		return index;
	});
	return cleanArray;
}

var cleansedBands = removeArticles(bands).sort();

function updateBDiv()
{
	bandsDiv.innerHTML = cleansedBands.map((sband) => {
		var searchedBand = bands.filter((string) => {
			return string.indexOf(sband) >= 0;
		});
		return `<li>${searchedBand}</li>`;
	});
}

updateBDiv();