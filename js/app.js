let allMoves = [$('#red'), $('#green'), $('#yellow'), $('#blue')];
let botMoves = [];
let score = 0;
let playerTurn = false;
let botisRunning = false
let playerMoves = [];
$('#win1').hide();
$('#end1').hide();

function botsTurn(){
    let interval = 2000;
    botMoves.push(allMoves[Math.floor(Math.random() * allMoves.length)]);
    playerMoves = [];
    botisRunning = true;
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
function wrongMove(){
    // score--;
    botisRunning = false;
    $('#end1').show();
    $('#gameStart').show();
    document.querySelector("#score > .currentScore").innerText = score;

}
function win(){
    $('#win1').show();
    $('#gameStart').show();
    document.querySelector("#score > .currentScore").innerText = score;
}
$('#gameStart').click(e => {
    e.preventDefault();
    botsTurn();
    playerTurn = true;
    $('#gameStart').hide(); 
});
allMoves.forEach(move => {
    move.click(() => {
        if(playerTurn === true){
            playerMoves.push(move);

            if(playerMoves[playerMoves.length - 1] !== botMoves[playerMoves.length - 1])
                wrongMove();
 
            if(playerMoves.length === botMoves.length && playerMoves[playerMoves.length - 1] === botMoves[playerMoves.length - 1]){
                score++;
                if(botisRunning == true)
                {botsTurn();}
            }
            if(score == 2){
                win();
            }
        }
    }); 
});