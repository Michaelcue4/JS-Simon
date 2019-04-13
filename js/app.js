document.querySelector('#gameStart').onclick = () => {
    console.log("Hello World");
};

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

game.addEventListener("click",(event)=>{
    gameOn = true;

    document.getElementsByClassName("button")[0].className= "startcolor";
    console.log("start");

})
easyButton.addEventListener("click",(event)=>{
    document.getElementsByClassName("button")[0].className= "startcolor";
    return;
})


