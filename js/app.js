document.querySelector('#gameStart').onclick = () => {
    console.log("Hello World");
};

let ColorWheel = [0,1,2,3];
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
let change =0;
let currentScore = 0;
let highestScore = 0;
let cpuMove = false;
let cputurn;
let playerturn;


const GreenChoice  = document.getElementById("green");
const BlueChoice = document.getElementById("blue");
const RedChoice = document.getElementById("red");
const YellowChoice = document.getElementById("yellow");
const easyButton = document.getElementById("easy");
const game = document.getElementById("gameStart");
// More Event listeners

game.addEventListener("click",(event)=>{
    
    gameOn = true;
    document.getElementsByClassName("button")[0].className= "startcolor";
    
    if(gameOn)
    {
        console.log("start");
        document.getElementById("green").className= "green1";
        document.getElementById("red").className= "red1"
        document.getElementById("yellow").className= "yellow1"
        document.getElementById("blue").className= "blue1"
        GamePlay();
    }
})
easyButton.addEventListener("click",(event)=>{
    document.getElementsByClassName("button")[0].className= "startcolor";
    return;
})

// Created Two functions to change the color and reset the color 
function resetColor(){
    GreenChoice  = document.getElementById("green");
    BlueChoice = document.getElementById("blue");
    RedChoice = document.getElementById("red");
    YellowChoice = document.ggetElementById("yellow");
}
function ChangeColor(){
    document.getElementById("green").className= "green1";
    document.getElementById("red").className = "red1";
    document.getElementById("yellow").className = "yellow1";
    document.getElementById("blue").className = "blue1";
}


//Event listeners 


BlueChoice.addEventListener('click', (event) => {
if(gameOn)
    {
    console.log("blueworks");
PlayerColorWheel.push(1);
    }
})

GreenChoice.addEventListener('click',(event) =>{
 if(gameOn)
    {
    console.log("things")
    }

})
YellowChoice.addEventListener("click",(event)=>
{
    if(gameOn)
    {
        console.log("yellow works");
    }
})
RedChoice.addEventListener("click", (event)=>{
if(gameOn)
    {
    console.log("red works");
    }

})
//game function
function GamePlay(){
gameOn =false;
for (var i =0; i<5;i++)
    {
    CpuColorWheel.push((Math.floor(Math.random() * 4) + 1))

    }
cpuMove = true;


}
function turn()
{
 if(change == )
}


///////////////////
function gameDone(){
    gameOn = false;
    win = true;

    if(!gameon)
    {
        document.getElementsByClassName("button")[0].className= "button";
    }
    if(currentScore >= highestScore)
    {
        highestScore = currentScore;
    }
    else highestScore = highestScore;
}
