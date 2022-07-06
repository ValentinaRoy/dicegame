
var target = 30
var total1=0
var total2=0
var turn=0
var refresh  = 0


function roll(){
    if(refresh==1){
        document.getElementById("game").innerText=("Please refresh the page to play New Game")
    }
    else{
    if(turn==0){
    var player1 = Math.floor(Math.random()*6)+1
    total1 +=player1
    document.getElementById("p1").innerText = (total1);
    turn=1
        if(total1>=30){
            refresh=1
            document.getElementById("result").innerText=("Player 1 Wins the game !!!");
        }
     }
    else{
    var player2 = Math.floor(Math.random()*6)+1
    total2 +=player2
    document.getElementById("p2").innerText = (total2);
    turn=0
    if(total2>=30){
        refresh=1
        document.getElementById("result").innerText=("Player 2 Wins the game !!!");
    }
    }
    }
}