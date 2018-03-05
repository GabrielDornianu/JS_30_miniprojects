const divs = document.querySelectorAll('div');

function logText(e)
{
	e.stopPropagation();
	console.log(this);
}


// It will trigger the click for each event bubbling up to the body element;
// If capture is active, then the event fires on descending order, lastly triggerring the element clicked on
// The option stop propagation  will stop event bubbling or capturing, only firing on one element

// Once is a new property. After the event running once it is unbound from the element it should fire upon
divs.forEach(div => div.addEventListener('click', logText, { capture: false, once: true }));