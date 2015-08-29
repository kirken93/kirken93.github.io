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

function shiftCipher(encrypt, text, key) {
   output = "";
    for (i=0; i<text.length; i++){
      newNum = (ascii(text.charCodeAt(i)) + (encrypt ? key : (26-key))) % 26;
      output = output.concat(String.fromCharCode(ascii(newNum)));
    }
    return output;
}

function affineCipher(encrypt, text, a, b){
  output = "";
  for (i=0; i<text.length; i++){
    output += (ascii(text.charAt(i)) + a*ascii(text.charAt(i))+b % 26 + 26) % 26;
    //output += (ascii(text.charAt(i)) + (encrypt ? a*ascii(text.charAt(i))+b : inverse(a)*ascii(text.charAt(i))-b)) % 26;
  //  output += (ascii(text.charAt(i)) + (encrypt ? a*ascii(text.charAt(i))+b : inverse(a)*(ascii(text.charAt(i) - b)) % 26 + 26 ) % 26));
  }
  document.getElementById('affine').innerHTML = output;
}

function ascii(letter){
  if (letter < 26) //return ascii value
      return (letter + 65);
  else if (letter > 64 && letter < 91) //return capital letter value
      return (letter - 65);
  else if (letter > 96 && letter < 123) //return capital letter value
      return (letter - 97);
  else
      return -1;
}


function inverse(num){
  if (value == 1) return 1;
  else if (value == 3) return 9;
	else if (value == 5) return 21;
	else if (value == 7) return 15;
	else if (value == 9) return 3;
	else if (value == 11) return 19;
	else if (value == 15) return 7;
	else if (value == 17) return 23;
	else if (value == 19) return 11;
	else if (value == 21) return 5;
	else if (value == 23) return 17;
	else if (value == 25) return 25;
	else return 0;
}
