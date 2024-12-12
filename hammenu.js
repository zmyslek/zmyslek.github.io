function myFunction() {
  var x = document.getElementById("hammenu");
  let adviceClass = "newhammenu";

  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
    x.classList.add(adviceClass);
  }
}
// Get the modal
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
modal.style.display = "none";
}