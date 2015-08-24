function myAge() {
  var birthday = new Date(1993,7,9).getTime();
  var age = document.getElementById("age");

  var current_date = new Date().getTime();
  var seconds_since = (current_date - birthday) / 1000;

  var years = (seconds_since / 31536000).toFixed(5);
  age.innerHTML = years;
}
