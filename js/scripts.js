function displayAkanName()
{
  var gender = document.querySelector('input[name="Gender"]:checked').value;
  var dayIndex = getDayIndex(year, month, day);

  alert("Your Akan name is: " + getAkanName(dayIndex, gender));
}

function getDayIndex()
{
  var day = parseInt(document.getElementById ("day").value);
  var month = parseInt(document.getElementById ("month").value);
  var year = parseInt(document.getElementById ("year").value);

  return new Date(year, month - 1, day).getDay();
}

function getAkanName(dayIndex, gender)
{
  var boyNames = ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girlNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  return gender === "Male" ? boyNames[dayIndex] : girlNames[dayIndex];
}