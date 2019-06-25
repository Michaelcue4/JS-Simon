// document.querySelector('#gameStart').onclick = () => {
//     console.log("Hello World");
// };

// let ColorWheel = [0,1,2,3];
// let PlayerColorWheel = [];
// let CpuColorWheel = [];
// const easy = 1000;
// const medium = 1000;
// const hard = 1000;
// let currentdiff = 0;
// let gameOn = false;
// let currentDiffBack; 
// let Startcolor;
// let On = false;
// let win = false;
// let change =0;
// let currentTurn = 0;
// let highestScore = 0;
// let cpuMove = false;
// let cputurn;
// let playerturn = false;
// let cpuRan = 0;
// let intervaltime;
//             //Defined Constants and Variables 

// const GreenChoice  = document.getElementById("green");
// const BlueChoice = document.getElementById("blue");
// const RedChoice = document.getElementById("red");
// const YellowChoice = document.getElementById("yellow");
// const easyButton = document.getElementById("easy");
// const game = document.getElementById("gameStart");
// // More Event listeners

// game.addEventListener("click",(event)=>
//     {   
//         gameOn = true;
//         document.getElementsByClassName("button")[0].className= "startcolor";
    
//         if(gameOn)
//             {
//                 console.log("start");
//                 // document.getElementById("green").className= "green1";
//                 // document.getElementById("red").className= "red1"
//                 // document.getElementById("yellow").className= "yellow1"
//                 // document.getElementById("blue").className= "blue1"
//                 GamePlay();
//             }
//     }
// )
//                 // Created Two functions to change the color and reset the color 
// function resetColor()
//     {
        
//         console.log('resetcolor')
//         document.getElementById("green").className = "green";
//         document.getElementById("blue").className = "blue";
//         document.getElementById("red").className = "red";
//         document.getElementById("yellow").className ="yellow";

//         // clearInterval(intervaltime);
//     }
// function ChangeGreenColor()
//     {
//         console.log("changeGreen");
//         document.getElementById("green").className = "green1";
//         setTimeout(function() {resetColor()}, 900)
//     }   
// function ChangeRedColor()
//     {
//         console.log("red changed");
//         document.getElementById("red").className = "red1";
//         setTimeout(function() {resetColor()}, 900)
//     }
// function ChangeYellowColor()
//     {   
//         console.log("Yellow change");
//         document.getElementById("yellow").className = "yellow1";
//         setTimeout(function() {resetColor()}, 900)
//     }   
// function ChangeblueColor()
//     {
//         console.log("blue change")
//         // document.getElementById("green").className= "green1";
//         // document.getElementById("red").className = "red1";
//         // document.getElementById("yellow").className = "yellow1";
//         document.getElementById("blue").className = "blue1";
//         setTimeout(function() {resetColor()}, 900)
//     }
//             //Event listeners 
// BlueChoice.addEventListener('click', (event) => 
//     {
//         if(On)
//             {
//                 console.log("blueworks");
//                 PlayerColorWheel.push(2);
//                 blue();
//                 setTimeout(function(){resetColor()},400);
//                 console.log(PlayerColorWheel);

//             }
//     }   
// )

// GreenChoice.addEventListener('click',(event) =>
//     {
//         if(On)
//         {
//             PlayerColorWheel.push(4);
//             console.log("things")
//             green();
//             setTimeout(function(){resetColor()},400);
//             console.log(PlayerColorWheel);
//         }

//     }   
// )
// YellowChoice.addEventListener("click",(event)=>
//     {
//         if(On)
//         {
//             PlayerColorWheel.push(3);
//             console.log("yellow works");
//             yellow();
//             setTimeout(function(){resetColor()},400);
//             console.log(PlayerColorWheel);

//         }
//     }
// )
// RedChoice.addEventListener("click", (event)=>
//     {
//         if(On)
//         {
//             PlayerColorWheel.push(1);
//             console.log("red works");
//             red();
//             setTimeout(function(){resetColor()},400);
//             console.log(PlayerColorWheel);

//         }
//     }
// )
//         //game function
// function GamePlay()
// {
//     On =true;
    
//     computerAdd()
//     for (var i =0; i<CpuColorWheel.length;i++)
//         {
//             // cpuRan = (Math.floor(Math.random() * 4));
//             // cpuMove = true;
//             // intervaltime = setInterval(turn,200);
//             cpuMove = true;
//             console.log(CpuColorWheel);
//             setTimeout(function(){
//             if(cpuRan === 0)
//             {   
//                 // blue();
//                 ChangeblueColor();
//             }
//             else if(cpuRan === 1)
//             {   
//                 // red();
//                 ChangeRedColor();
//             }
//             else if(cpuRan === 3)
//             {   
//                 // green();
//                 ChangeGreenColor();
//             }
//             else if(cpuRan === 2)
//             {   
//                 // yellow();
//                 ChangeYellowColor();
//             }
//         },600)
//         setTimeout(function(){
//             switchturn();
//             player()
//         })
//             // CpuColorWheel.push(cpuRan);
//             console.log(CpuColorWheel)
//             // CpuColorWheel.push(cpuRan)
//         }
//     // setTimeout(function() {resetColor()}, 400);
    
// }
// function computerAdd(){
//     cpuRan = (Math.floor(Math.random() * 4));
//     CpuColorWheel.push(cpuRan)
// }
// function switchturn(){
//     cputurn = !cputurn;
//     playerturn = !playerturn;
// }
// function player(){
//     if (playerturn === true){

//     }
// }
// function checkvalue(x){
//     if(PlayerColorWheel[x]!==CpuColorWheel){
//         alert("gameover")
//     }
//     else{
//         playerturnOver();
//     }
// }
// function playerturnOver(){
//     if(PlayerColorWheel == CpuColorWheel){
//         PlayerColorWheel = [];
//         switchturn();
//         GamePlay();
//     }
// }
// function turn()
//     {
//         console.log("turn")
//         on = false;
//         if(change == currentTurn)
//         {   
//             // ChangeColor();
//             setInterval(resetColor(), 3000)
//             clearInterval(intervaltime);
//             cpuMove=false;
//             on=true;
//         }
//         else if(cpuMove)
//         {
//             // ChangeColor();
//             console.log("cpu Move change color ");
//             setTimeout(()=>
//             {
//                 if(CpuColorWheel[currentTurn]=1)red()
//                 if(CpuColorWheel[currentTurn]=2)blue()
//                 if(CpuColorWheel[currentTurn]=3)yellow()
//                 if(CpuColorWheel[currentTurn]=4)green()
//                 currentTurn++;
//             },800)
     
//         }
//     }
// function pickcolor()
//     {
//         cpuMove = true;
//         randomColor = ColorWheel[Math.floor(Math.random() * ColorWheel.length)]
//         CpuColorWheel.push(randomColor);
//     }
// function red()
//     {
//         document.getElementById("red").className = "red1";
//     }
// function blue()
//     {
//         document.getElementById("blue").className = "blue1";
//     }
// function green()
//     {
//         document.getElementById("green").className= "green1"
//     }
// function yellow()
//     {
//         document.getElementById("yellow").className= "yellow1"
//     }

// ///////////////////
// function gameDone()
// {
//     gameOn = false;
//     win = true;
//     if(!gameOn)
//     {
//         document.getElementsByClassName("button")[0].className= "button";
//     }
//     if(currentScore >= highestScore)
//     {
//         highestScore = currentScore;
//     }
//     else highestScore = highestScore;
// }


let allMoves = [$('#red'), $('#green'), $('#yellow'), $('#blue')];
let botMoves = [];
let score = 0;
let playerTurn = false;
let playerMoves = [];

function botsTurn(){
    let interval = 2000;
    botMoves.push(allMoves[Math.floor(Math.random() * allMoves.length)]);
    playerMoves = [];
    botMoves.forEach(move => {
        botMakesMove(move, interval);
        interval += 2000;
    });
}

function botMakesMove(move, interval){
    setTimeout(() => {
        move.fadeTo(1000, .5);
        move.fadeTo(1000, 1);
    }, interval);
}