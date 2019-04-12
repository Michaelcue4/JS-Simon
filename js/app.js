//let game = document.querySelector("button > #gameStart");
// document
document.querySelector('#gameStart').onclick = () => {
    console.log("Hello World");
};
//console.log(game)

let ColorWheel = ["red","green","blue","yellow"];
let PlayerColorWheel = [];
let CpuColorWheel = [];
const easy = 1000;
const medium = 1000;
const hard = 1000;
let currentdiff = 0;
let gameOn = false;
let currentDiffBack; 
let Startcolor;
let Diffselect = false;


const GreenChoice  = document.getElementsByClassName("green");
const BlueChoice = document.getElementsByClassName("blue");
const RedChoice = document.getElementsByClassName("red")
const YellowChoice = document.getElementsByClassName("yellow");
const easyButton = document.getElementById("easy");
const game = document.getElementById("gameStart");

console.log(game)
// document.getElementById("Easy").onClick = function(){
// currentdiff = easy;
// let currentDiffBack = this;
// this.style.backgroundColor = "yellow";
// document.getElementById("Medium").style.backgroundColor = "black";
// document.getElementById("Hard").style.backgroundColor = "black";
// }

game.addEventListener("click",(event)=>{
    gameOn = true;

    document.getElementsByClassName("button")[0].className= "startcolor";
    console.log("start");

})
easyButton.addEventListener("click",(event)=>{
    document.getElementsByClassName("button")[0].className= "startcolor";
    return;

})
