function resetWidth()
{
	Array.from(document.querySelectorAll('.panel')).forEach(function(panel){
		panel.classList.remove('open-active');	
	});
}

function enlargeElement(element)
{
	element.parentElement.classList.add('open-active');
}

Array.from(document.querySelectorAll('.panel p')).forEach(function(paragraph){
	paragraph.addEventListener('click', function(){
		resetWidth();
		enlargeElement(paragraph);
	});
});