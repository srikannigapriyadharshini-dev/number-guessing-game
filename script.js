
var guessnumber = document.getElementById("guessnumber")
var result = document.getElementById("result")
var randomnumber = Math.floor(Math.random() * 10) + 1
var score = document.getElementById("score")
var totalscore = 10;

function checkeasy() {
    var enternumber = Number(guessnumber.value)

    if (enternumber === randomnumber) {
        result.textContent = "🎉 You are right!"
        alert("You won easy level")
    }
    else if (enternumber > randomnumber) {
        result.textContent = "Too High!"
        totalscore--
    }
    else {
        result.textContent = "Too Low!"
        totalscore--
    }

    score.textContent = "Score: " + totalscore

    if (totalscore <= 0) {
        result.textContent = "💀 Game over! Number was " + randomnumber
    }
}


var guessnumber1 = document.getElementById("guessnumber1")
var result1 = document.getElementById("result1")
var randomnumber1 = Math.floor(Math.random() * 100) + 1
var score1 = document.getElementById("score1")
var totalscore1 = 100;

function checkmedium() {
    var enternumber1 = Number(guessnumber1.value)

    if (enternumber1 === randomnumber1) {
        result1.textContent = "🎉 You are right!"
        alert("You won medium level")
    }
    else if (enternumber1 > randomnumber1) {
        result1.textContent = "Too High!"
        totalscore1--
    }
    else {
        result1.textContent = "Too Low!"
        totalscore1--
    }

    score1.textContent = "Score: " + totalscore1

    if (totalscore1 <= 0) {
        result1.textContent = "💀 Game over! Number was " + randomnumber1
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
        alert("🔥 You won Hard level!")
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
