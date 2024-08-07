"use strict";
//variable
let email = document.querySelector("#mail");
let password = document.querySelector('#pass');
let meterStrength = document.querySelector('#mtr');
let sbButton  = document.querySelector('button');
sbButton.disabled = 1;
//functionality
password.addEventListener("input", checkStrength);
function checkStrength(){
if(password.value.length == 0){
  meterStrength.value = 0
}else if(password.value.length>0 && password.value.length<=3){
  meterStrength.value = 20
}else if(password.value.length>3 && password.value.length<=6){
  meterStrength.value = 50
}else if(password.value.length>6 && password.value.length<=8){
  meterStrength.value = 70;
}else if(password.value.length>8){
  meterStrength.value = 100
  sbButton.disabled = 0;
  sbButton.addEventListener("click", ()=> alert("Submitted!"))
}
}
