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
let win = false;


const GreenChoice  = document.getElementsByClassName("green");
const BlueChoice = document.getElementsByClassName("blue");
const RedChoice = document.getElementsByClassName("red")
const YellowChoice = document.getElementsByClassName("yellow");
const easyButton = document.getElementById("easy");
const game = document.getElementById("gameStart");

game.addEventListener("click",(event)=>{
    gameOn = true;

    document.getElementsByClassName("button")[0].className= "startcolor";
    
    if(gameOn)
    {
        console.log("start");
        document.getElementsByClassName("green").className= "green1";

    }
})
easyButton.addEventListener("click",(event)=>{
    document.getElementsByClassName("button")[1].className= "startcolor";
    return;
})

// let z = new Promise((resolve,reject)=>{
// let a = 1+1;
// if( a == 2)
// { 
//     console.log("things");
    
//     resolve("success");
// }
// else{
//     reject(failed);
// }
//})

// Created Two functions to change the color and reset the color 
function resetColor(){
    GreenChoice  = document.getElementsByClassName("green");
    BlueChoice = document.getElementsByClassName("blue");
    RedChoice = document.getElementsByClassName("red")
    YellowChoice = document.getElementsByClassName("yellow");
}
function ChangeColor(){
    document.getElementsByClassName("green").className= "green1";
    document.getElementsByClassName("red").className = "red1";
    document.getElementsByClassName("yellow").className = "yellow1";
    document.getElementsByClassName("blue").className = "blue1";
}





// BlueChoice.addEventListener('click', (event)=>{
// if(gameOn)
// {
// PlayerColorWheel.push(1);
// }

// })
// GreenChoice.addEventListener("click", (event)=>{
//  if(gameOn)
//  {

//  }

// })
// YellowChoice.addEventListener("click",(event)=>
// {
//     if(gameOn)
//     {

//     }
// })
// RedChoice.addEventListener("click", (event)=>{


// })
// function colorChange(){

// }
function GamePlay(){

}
function gameDone(){
    gameOn = false;
    win = true;

}