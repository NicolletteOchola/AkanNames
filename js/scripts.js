function displayAkanName()
{
  
  var day = parseInt(document.getElementById ("day").value);
  var month = parseInt(document.getElementById ("month").value);
  var year = parseInt(document.getElementById ("year").value);
  var gender = document.querySelector('input[name="Gender"]:checked').value;
  if(invlid(day,month)){
  var dayIndex = new Date(year, month - 1, day).getDay();

  alert("Your Akan name is: " + getAkanName(dayIndex, gender));
  }
}
function getAkanName(dayIndex, gender)
{
  var boyNames = ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girlNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  return gender === "Male" ? boyNames[dayIndex] : girlNames[dayIndex];
}

function invlid(day, month)
{
  if ( day < 1 || day > 31) { 
    alert("Day entered is Invalid");
    return false;
  }
  else if ( month < 1 || month > 12 || month == 2 && day > 29 ) {
    alert("Month entered is invalid");
    return false;
  }
  else
  {
    return true;
  }
}