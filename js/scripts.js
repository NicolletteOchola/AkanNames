var day = parseInt(document.getElementById ("day").value);
var month = parseInt(document.getElementById ("month").value);
var year = parseInt((document.getElementById ("year").value).substring(2, 3));
var gender = document.getElementById ("gender").value;
var century = parseInt((year/100) + 1);

function getDayIndex(day, month, year, century)
{
  return Math.round(parseInt(((century/4) - 2 * century - 1) + ((5*year/4)) + ((26 * (month+1)/10)) + day ) % 7);
}

// ((20/4) - ((2 * 20) - 1)) + (((5 * 96)/4) ) + ((((26 *(3 + 1))/10) ) + 30 ) % 7;

// ( ( (CC/4) - (2 * CC - 1)) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

// ( ( (20/4) - 2 * 20 - 1) + ((5*96/4) ) + ((26*(03+1)/10)) + 30 ) % 7;

// ((20/4) - (2 * 20 - 1)) + (5 * 96/4) + ((26*(3 + 1)/10)) + 30 ) % 7;

function akanName(dayIndex, gender)
{
  var boyNames = ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girlNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  return gender == "Male" ? boyNames[dayIndex] : girlNames[dayIndex];
}

function getGender()
{
  return document.getElementById("gender").value == "Male" ? "Male" : "Female";
}

