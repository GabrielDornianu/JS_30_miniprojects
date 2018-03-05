const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
	.then(function(blob){
		return blob.json();
	})
	.then(function(data){
		return cities.push(...data);
	});

function highlightResultPortions(locationName, str)
{
	var highlightRegex = new RegExp(str, 'g');
	locationName = locationName.replace(highlightRegex, `<mark>${str}</mark>`);
	return locationName;
}

function updateHtml(arrToHtml, str)
{
	var mappedResults = arrToHtml.map(function(result){
		var cityName = highlightResultPortions(result.city, str);
		var stateName = highlightResultPortions(result.state, str);
		return `<li>
			<p>City name: ${cityName}</p>
			<span>State: ${stateName}</span>
		</li>
		`;
	});
	document.getElementsByClassName('search-results')[0].innerHTML = mappedResults;
}

function triggerSearch(str)
{
	return cities.filter(function(cityName){
		var cityRegex = new RegExp(str, 'gi');
		return cityName.city.match(cityRegex) || cityName.state.match(cityRegex);
	});
}

function updateList()
{
	if(!this.value)
	{
		return updateHtml([]);
	}
	var searchResult = triggerSearch(this.value);
	updateHtml(searchResult, this.value);
}

document.getElementsByClassName('search-input')[0].addEventListener('keyup', updateList);