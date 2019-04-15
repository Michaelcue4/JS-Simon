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
let On = false;
let win = false;
let change =0;
let currentTurn = 0;
let highestScore = 0;
let cpuMove = false;
let cputurn;
let playerturn;
let cpuRan = 0;
let intervaltime=0;
            //Defined Constants and Variables 

const GreenChoice  = document.getElementById("green");
const BlueChoice = document.getElementById("blue");
const RedChoice = document.getElementById("red");
const YellowChoice = document.getElementById("yellow");
const easyButton = document.getElementById("easy");
const game = document.getElementById("gameStart");
// More Event listeners

game.addEventListener("click",(event)=>
    {   
        gameOn = true;
        document.getElementsByClassName("button")[0].className= "startcolor";
    
        if(gameOn)
            {
                console.log("start");
                // document.getElementById("green").className= "green1";
                // document.getElementById("red").className= "red1"
                // document.getElementById("yellow").className= "yellow1"
                // document.getElementById("blue").className= "blue1"
                GamePlay();
            }
    }
)
                // Created Two functions to change the color and reset the color 
function resetColor()
    {
        
        console.log('HELLO FUCKOS')
        document.getElementById("green").className = "green";
        document.getElementById("blue").className = "blue";
        document.getElementById("red").className = "red";
        document.getElementById("yellow").className ="yellow";

        clearInterval(intervaltime);
    }
function ChangeColor()
    {
        console.log("Why me")
        document.getElementById("green").className= "green1";
        document.getElementById("red").className = "red1";
        document.getElementById("yellow").className = "yellow1";
        document.getElementById("blue").className = "blue1";
        setTimeout(function() {resetColor()}, 800)
    }
            //Event listeners 
BlueChoice.addEventListener('click', (event) => 
    {
        if(On)
            {
                console.log("blueworks");
                PlayerColorWheel.push(2);
                blue();
                setInterval(resetColor(),6000)
            }
    }   
)

GreenChoice.addEventListener('click',(event) =>
    {
        if(On)
            {
                PlayerColorWheel.push(4);
                console.log("things")
                green();
                setInterval(resetColor(),18000)
            }

    }   
)
YellowChoice.addEventListener("click",(event)=>
    {
        if(On)
        {
            PlayerColorWheel.push(3);
            console.log("yellow works");
            yellow();
            setInterval(resetColor(),18000)
        }
    }
)
RedChoice.addEventListener("click", (event)=>
    {
        if(On)
        {
            PlayerColorWheel.push(1);
            console.log("red works");
            red();
            setInterval(resetColor(),18000)
        }
    }
)
        //game function
function GamePlay()
{
    On =true;
    for (var i =0; i<5;i++)
        {
            // cpuRan = ((Math.floor(Math.random() * 4) + 1))
            cpuRan=1;
            if(cpuRan = 1)
            {
                red();
            }
            CpuColorWheel.push(cpuRan);
            console.log(CpuColorWheel)
        
        }
    cpuMove = true;
    intervaltime = setInterval(turn(),700);
    
}
function turn()
    {
        console.log("the sounds of slience")
        if(change == currentTurn)
        {   
            ChangeColor();
            // setInterval(resetColor(), 3000)
            clearTimeout(intervaltime);
            cpuMove=false;
            on=true;
        }
        else if(cpuMove)
        {
            ChangeColor();
            console.log("i am here");
            setTimeout(()=>
            {
                if(CpuColorWheel[currentTurn]=1)red()
                if(CpuColorWheel[currentTurn]=2)blue()
                if(CpuColorWheel[currentTurn]=3)yellow()
                if(CpuColorWheel[currentTurn]=4)green()
                currentTurn++;
            },300)
     
        }
    }
function pickcolor()
    {
        cpuMove = true;
        randomColor = ColorWheel[Math.floor(Math.random() * ColorWheel.length)]
        CpuColorWheel.push(randomColor);
    }
function red()
    {
        document.getElementById("red").className = "red1";
    }
function blue()
    {
        document.getElementById("blue").className = "blue1";
    }
function green()
    {
        document.getElementById("green").className= "green1"
    }
function yellow()
    {
        document.getElementById("yellow").className= "yellow1"
    }

///////////////////
function gameDone()
{
    gameOn = false;
    win = true;
    if(!gameOn)
    {
        document.getElementsByClassName("button")[0].className= "button";
    }
    if(currentScore >= highestScore)
    {
        highestScore = currentScore;
    }
    else highestScore = highestScore;
}
