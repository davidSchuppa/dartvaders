function setEventListeners() {
    $(".play").click(letsPlay);
}

function letsPlay() {
    let playerOne = document.getElementById("player-one").value;
    let playerTwo = document.getElementById("player-two").value;
    console.log(playerOne);
    console.log(playerTwo);
}

setEventListeners();


