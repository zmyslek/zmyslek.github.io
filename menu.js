function myFunction() {
  var x = document.getElementById("hammenu").innerHTML;
  let adviceClass = "newhammenu";

  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
    x.classList.add(adviceClass);
  }
}