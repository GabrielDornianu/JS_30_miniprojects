var inputBoxes = document.querySelectorAll('.input-box');
var shiftDown = false;

function checkBoxesInRange(event, checkedElement)
{
	var firstOccurence = false;
	var beginChecking = false;
	var firstCheckedBox;
	var lastCheckedBox;

	// Find the checked boxes and save them as variables
	Array.from(inputBoxes).forEach((box) => {
		if(!firstOccurence && box.checked)
		{
			firstCheckedBox = box;
			firstOccurence = true;
		}
		if(box.checked)
		{
			lastCheckedBox = box;
			lastOccurence = true;
		}
	});

	// Check the boxes between first and the last checked
	Array.from(inputBoxes).forEach((box) => {
		if(box == firstCheckedBox)
		{
			beginChecking = true;
		}
		if(box == lastCheckedBox)
		{
			beginChecking = false;
		}
		if(beginChecking)
		{
			box.checked = true;
		}
	});
}

function selectMultiple(e)
{
	if(shiftDown)
	{
		checkBoxesInRange(e, this);
	}
}

function removeShiftConfirm()
{
	shiftDown = false;
}

function confirmShiftKey(e)
{
	if(e.keyCode == 16)
	{
		shiftDown = true;
	}
}

window.addEventListener('keydown', confirmShiftKey);
window.addEventListener('keyup', removeShiftConfirm);

Array.from(inputBoxes).forEach(box => box.addEventListener('change', selectMultiple));