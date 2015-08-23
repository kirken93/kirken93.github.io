<script language="javascript" type="text/javascript">
  function myAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  document.getElementById("age").innerHTML = myAge('07-09-1993');
</script>
