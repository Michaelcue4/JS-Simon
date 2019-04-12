let ColorWheel = ["red","green","blue","yellow"];
let PlayerColorWheel = [];
let CpuColorWheel = [];
let easy = 1000;
let medium = 1000;
let hard = 1000;
let currentdiff = 0;
let gameOn = fasle;


const GreenChoice  = document.getElementsByClassName("green");
const BlueChoice = document.getElementsByClassName("blue");
const RedChoice = document.getElementsByClassName("red")
const YellowChoice = document.getElementsByClassName("yellow");

document.getElementById('Easy').onclick = function(){
currentdiff = easy;
let currentDiffBack = this;
this.style.backgroundColor = "yellow";
document.getElementById("Medium").style.backgroundColor = "black";
document.getElementById("Hard").style.backgroundColor = "black";
}
startgam