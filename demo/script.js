
randomNumber = Math.floor(Math.random() * 4 + 1);

window.onload = function() {
  if (randomNumber == 1) {
    document.getElementById("rd1").style.display = "inline";
    document.getElementById("rd2").style.display = "none";
    document.getElementById("rd3").style.display = "none";
  }
  if (randomNumber == 2) {
    document.getElementById("rd1").style.display = "none";
    document.getElementById("rd2").style.display = "inline";
    document.getElementById("rd3").style.display = "none";
  }
  if (randomNumber == 3) {
    document.getElementById("rd1").style.display = "none";
    document.getElementById("rd2").style.display = "none";
    document.getElementById("rd3").style.display = "inline";

  }

}
