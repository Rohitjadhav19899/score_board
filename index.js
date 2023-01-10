let scoreMessi = 0
let scoreRonaldo = 0

document.getElementById("cur-scoreMessi").textContent = scoreMessi
document.getElementById("cur-scoreRonaldo").textContent = scoreRonaldo

function add1Messi() {
    scoreMessi += 1
    document.getElementById("cur-scoreMessi").textContent = scoreMessi
}

function add2Messi() {
    scoreMessi += 2
    document.getElementById("cur-scoreMessi").textContent = scoreMessi
}

function add3Messi() {
    scoreMessi += 3
    document.getElementById("cur-scoreMessi").textContent = scoreMessi
}

function add1Ronaldo() {
    scoreRonaldo += 1
    document.getElementById("cur-scoreRonaldo").textContent = scoreRonaldo
}

function add2Ronaldo() {
    scoreRonaldo += 2
    document.getElementById("cur-scoreRonaldo").textContent = scoreRonaldo
}

function add3Ronaldo() {
    scoreRonaldo += 3
    document.getElementById("cur-scoreRonaldo").textContent = scoreRonaldo
}

function reset() {
    scoreMessi = 0
    scoreRonaldo = 0

    document.getElementById("cur-scoreMessi").textContent = scoreMessi
    document.getElementById("cur-scoreRonaldo").textContent = scoreRonaldo
}