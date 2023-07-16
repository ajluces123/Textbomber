;console.log('Hello World!');
const input = document.getElementById("text");
const display = document.getElementById("display");
const range = document.getElementById("range");
const number = document.getElementById("number");

function copy(){
if(display.value == "") {
  alert("can't copy text because it's empty!");
}
else {
  var copytext = document.getElementById("display");
copytext.select();
document.execCommand("copy");
  alert("Text copied to clipboard.");
window.location.reload(true), 5000;

}
  
  
}

document.getElementById("start").addEventListener('click', function(){
  if (input.value == "") {
    alert("Input field should not be empty!");
    display.innerHTML = "";
  }
  else {
    for (let i = 1; i <= range.value; i++) {
      console.log("it works");
      number.innerHTML = "Total of " + range.value + " copies.";
      display.innerHTML += input.value + '\n';
    }
  }
  
});
