
document.getElementById("demo").addEventListener("click", zodiac);

function zodiac() {
var currentYear = 2016;
var year = parseInt(prompt("In what year were you born?(numbers only)"));
var month = parseInt(prompt("In what month were you born?(numbers only)"));
var day = parseInt(prompt("On what day were you born?(numbers only)"));

var chinese = "";
var greek = "";
var gen = "";

if ((currentYear - year) % 12 == 0)
chinese = "monkey";
else if ((currentYear +1 - year) % 12 == 0)
chinese = "rooster";
else if ((currentYear +2 - year) % 12 == 0)
chinese = "dog";
else if ((currentYear +3 - year) % 12 == 0)
chinese = "pig";
else if ((currentYear +4 - year) % 12 == 0)
chinese = "rat";
else if ((currentYear +5 - year) % 12 == 0)
chinese = "ox";
else if ((currentYear +6 - year) % 12 == 0)
chinese = "tiger";
else if ((currentYear +7 - year) % 12 == 0)
chinese = "rabbit";
else if ((currentYear +8 - year) % 12 == 0)
chinese = "dragon";
else if ((currentYear +9 - year) % 12 == 0)
chinese = "snake";
else if ((currentYear +10 - year) % 12 == 0)
chinese = "horse";
else
chinese = "goat";

if (year >2009)
gen = "an alpha";
else if(year >2000)
gen = "a gen z";
else if(year >1983)
gen = "a millenial";
else if(year >1965)
gen = "a gen x";
else if(year >1945)
gen = "a boomer";
else if(year >1925)
gen = "a silent";
else if(year >1900)
gen = "the greatest";
else
gen = "an ancient";

if (month == 1)
{
	if (day <= 20)
	{
		greek = "caprine";
	}
	else
	{
		greek = "aquatic";
	}
}

else if (month == 2)
{
if (day <= 19)
{
	greek = "aquatic";
}
else
{
	greek = "fishy";
}
}

else if (month == 3)
{
if (day <= 21)
{
	greek = "fishy";
}
else
{
	greek = "sheepish";
}
}

else if (month == 4)
{
if (day <= 19)
{
	greek = "sheepish";
}
else
{
	greek = "bull-headed";
}
}

else if (month == 5)
{
if (day <= 20)
{
	greek = "bull-headed";
}
else
{
	greek = "cloned";
}
}

else if (month == 6)
{
if (day <= 21)
{
	greek = "cloned";
}
else
{
	greek = "crabby";
}
}

else if (month == 7)
{
if (day <= 22)
{
	greek = "crabby";
}
else
{
	greek = "lion-hearted";
}
}

else if (month == 8)
{
if (day <= 22)
{
	greek = "lion-hearted";
}
else
{
	greek = "virginal";
}
}

else if (month == 9)
{
if (day <= 21)
{
	greek = "virginal";
}
else
{
	greek = "balanced";
}
}

else if (month == 10)
{
if (day <= 20)
{
	greek = "balanced";
}
else
{
	greek = "venomous";
}
}

else if (month == 11)
{
if (day <= 21)
{
	greek = "venomous";
}
else
{
	greek = "deft";
}
}

else if (month == 12)
{
if (day <= 21)
{
	greek = "deft";
}
else
{
	greek = "caprine";
}
}



alert("You are " + gen + " " + greek + " " + chinese + "!");
