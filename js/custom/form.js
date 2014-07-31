var inputBoxes=document.getElementsByTagName('input');
var smallError=document.getElementsByTagName('small');

for(var i=0; i<inputBoxes.length; i++)
{
	smallError[i].style.display="none";
	if(inputBoxes[i].type=="text")
	{
		inputBoxes[i].onblur=blurCheck;
		inputBoxes[i].onfocus=focusCheck;
	}
}