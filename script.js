var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var randomnumber=Math.floor(Math.random()*10)+1
var score=document.getElementById("score")
var totalscore=10;
function checkeasy(){
    var enternumber=guessnumber.value
    if(enternumber==randomnumber){
        
        result.textContent="You are right"
        alert("You won a easy level")
    }
    else if(enternumber > randomnumber){
        result.textContent="Too high"
        totalscore--
    }
    else{
        result.textContent="You are wrong"
        
       }   
    score.textContent="Score: " + totalscore
    if(totalscore <=0){
        result.textContent="💀Game over! Better luck next time"
    }
    
}
var guessnumber1=document.getElementById("guessnumber1")
var result1=document.getElementById("result1")
var randomnumber1=Math.floor(Math.random()*100)+1
var score1=document.getElementById("score1")
var totalscore1=100;
function checkmedium(){
    var enternumber1=Number(guessnumber1.value)
    if(enternumber1==guessnumber1){
        result.textContent="You are right"
        alert("You won a medium level")
    }
    else if(enternumber1 > randonnumber1){
        result1.textContent="Too High!"
        totalscore1--

    }
    else{
        
        result1.textContent="Too Low!"
        totalscore1--
        
    }    
    score1.textContent="Score: " + totalscore1
    if (totalscore1 <= 0){
        result1.textContent="💀Game over! Better luck next time"
    }
    
}
var guessnumber2 = document.getElementById("guessnumber2")
var result2 = document.getElementById("result2")
var randomnumber2 = Math.floor(Math.random() * 500) + 1
var score2 = document.getElementById("score2")
var totalscore2 = 500;

function checkhard() {

    var enternumber2 = Number(guessnumber2.value)

    if (enternumber2 === randomnumber2) {
        result2.textContent = "🎉 Correct! You guessed it!"
        alert("🔥 You won the Hard level!")
    }
    else if (enternumber2 > randomnumber2) {
        result2.textContent = "Too High!"
        totalscore2--
    }
    else {
        result2.textContent = "Too Low!"
        totalscore2--
    }

    score2.textContent = "Score: " + totalscore2

    if (totalscore2 <= 0) {
        result2.textContent = "💀 Game Over! The number was " + randomnumber2
    }
}