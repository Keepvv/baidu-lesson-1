function leftIn(){
  var getNumber = document.getElementById("number").value ;
  var myNumber = document.createTextNode(getNumber) ;
  var getPalce = document.getElementById("wrap") ;
  var myLi = document.createElement("li") ;
  myLi.appendChild(myNumber) ;
  var firstNumber = getPalce.firstChild ;
  getPalce.insertBefore(myLi,firstNumber);
}
function rightIn(){
  var getNumber = document.getElementById("number").value ;
  var myNumber = document.createTextNode(getNumber) ;
  var getPalce = document.getElementById("wrap") ;
  var myLi = document.createElement("li") ;
  myLi.appendChild(myNumber) ;
  getPalce.appendChild(myLi) ;
}
function leftOut(){
  var getNumber = document.getElementById("number").value ;
  var getPalce = document.getElementById("wrap") ;
  document.createTextNode(getNumber) ;
  var lastNumber = getPalce.lastElementChild ;
  getPalce.removeChild(lastNumber) ;
}
function rightOut(){
  var getNumber = document.getElementById("number").value ;
  var getPalce = document.getElementById("wrap") ;
  document.createTextNode(getNumber) ;
  var firstNumber = getPalce.firstElementChild ;
  getPalce.removeChild(firstNumber) ;
}
var leftinin = document.getElementById("left-in") ;
var rightinin = document.getElementById("left-in") ;
var leftoutout = document.getElementById("left-in") ;
var rightoutout = document.getElementById("left-in") ;
leftinin.onclick = function () {
  leftIn() ;
}
rightinin.onclick = function () {
  rightIn() ;
}
leftoutout.onclick = function () {
  leftOut() ;
}
rightoutout.onclick = function () {
  leftOut() ;
}
