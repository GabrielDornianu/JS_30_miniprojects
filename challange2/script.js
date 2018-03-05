updateDate();

function updateDate()
{
	var dataObj = new Date();

	seconds = dataObj.getSeconds();
	minutes = dataObj.getMinutes();
	hours = dataObj.getHours();

	var hands = document.getElementsByClassName("hand");
	for(let i = 0; i < hands.length; i++)
	{
		if(seconds == 0 || minutes == 0 || hours == 0)
		{
			hands[i].classList.remove('animated-hand');
		}else 
		{
			hands[i].classList.add('animated-hand');
		}
	}

	var secondsHand = document.getElementsByClassName('seconds-hand')[0];
	secondsHand.style.transform = "rotate(" + (((seconds / 60) * 360) - 90) + "deg)";

	
	var minutesHand = document.getElementsByClassName('minutes-hand')[0];
	minutesHand.style.transform = "rotate(" + (((minutes / 60) * 360) - 90) + "deg)";


	var hoursHand = document.getElementsByClassName('hours-hand')[0];
	hoursHand.style.transform = "rotate(" + (((hours / 12) * 360) - 90) + "deg)";
}

setInterval(function() {
	updateDate();
}, 1000);