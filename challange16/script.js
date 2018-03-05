var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
const walk = 100;

function shadow(e)
{
	const { offsetWidth: width, offsetHeight: height} = hero;
	let { offsetX: x, offsetY: y } = e;

	if(this !== e.target)
	{
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.floor((x / width * walk) - (walk / 2));
	const yWalk = Math.floor((y / height * walk) - (walk / 2));

	text.style.textShadow = `${-xWalk}px ${-yWalk}px 10px green`;
}

hero.addEventListener('mousemove', shadow);