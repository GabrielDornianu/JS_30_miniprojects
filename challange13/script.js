var images = document.querySelectorAll('.animatedImage');

function updateClassList(object, action)
{
	if(action == 'add')
	{
		object.classList.add('animate');
	}
	else if(action == 'remove')
	{
		object.classList.remove('animate');
	}
}

function triggerAnimations()
{
	Array.from(images).forEach((image) => {
		if(window.scrollY + window.innerHeight > image.offsetTop + image.offsetHeight)
		{
			updateClassList(image, 'add');
		}
		else{
			updateClassList(image, 'remove');
		}
	});
}

window.addEventListener('load', () => triggerAnimations());
window.addEventListener('scroll', () => triggerAnimations());
