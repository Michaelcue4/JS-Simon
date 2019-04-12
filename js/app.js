let game = document.querySelector("#");
// document
// console.log(game)

let ColorWheel = ["red","green","blue","yellow"];
let PlayerColorWheel = [];
let CpuColorWheel = [];
const easy = 1000;
const medium = 1000;
const hard = 1000;
let currentdiff = 0;
let gameOn = false;
let currentDiffBack; 


const GreenChoice  = document.getElementsByClassName("green");
const BlueChoice = document.getElementsByClassName("blue");
const RedChoice = document.getElementsByClassName("red")
const YellowChoice = document.getElementsByClassName("yellow");
const easyButton = document.getElementById("easy");
// const game = document.getElementById("gameStart");
console.log(game)
console.log(GreenChoice)
// document.getElementById("easy").onClick = function(){
// currentdiff = easy;
// let currentDiffBack = this;
// this.style.backgroundColor = "yellow";
// document.getElementById("Medium").style.backgroundColor = "black";
// document.getElementById("Hard").style.backgroundColor = "black";
// }

// Startgame.addEventListener("click",(event)=>{
//     gameOn = true;
//     console.log("start");
//     alert("start");
// })