function myAge() {
  var birthday = new Date(1993,7,9).getTime();
  var age = document.getElementById("age");

  var current_date = new Date();
  var seconds_since = (current_date.getTime() - birthday) / 1000;

  var years = (seconds_since / 31536000).toFixed(5);
  if (years < (current_date.getFullYear() - 1993))
    if (current_date.getMonth() >= 6 && current_date.getDate() >=9)
      years = current_date.getFullYear() - 1993;

  age.innerHTML = years;
}
