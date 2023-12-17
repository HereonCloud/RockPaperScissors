function generateComputerPick(){
    const options = ["scissors", "rock", "paper"]
    return options[Math.floor(Math.random() * options.length)]
}

function checkWinner(player, opponent){
    if(player  === opponent) return "DRAW"
    if((player === "scissors" && opponent === "rock") || (player === "paper" && opponent === "scissors") || (player === "rock" && opponent ==="paper")) return "YOU LOSE"
    return "YOU WIN"
}

 document.querySelectorAll("button").forEach((e) => e.addEventListener("click", (b) => {
    var player = b.target.value
    var opponent = generateComputerPick()
    document.getElementById("opponent").style.backgroundImage = `url("/assets/images/${opponent}.svg")`
    document.getElementById("player").style.backgroundImage = `url("/assets/images/${player}.svg")`
    document.getElementById("outcome").innerText = checkWinner(player, opponent)
}))



