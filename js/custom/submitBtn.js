submitBtn.onclick=function()
{
	var out="";
	out += (fname.value?		fname.value: 	".") + "\n";
	out += (uname.value?		uname.value: 	".") + "\n";
	out += (domain.value?	domain.value: ".") + "\n";
	alert(out);
};