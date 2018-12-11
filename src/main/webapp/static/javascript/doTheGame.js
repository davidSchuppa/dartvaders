function setEventListeners() {
    $(".play").click(letsPlay);
}

function letsPlay() {
    let playerOne = document.getElementById("player-one").value;
    let playerTwo = document.getElementById("player-two").value;
    let gametype = document.getElementById("gametype").value;
    let playerOneTable = document.getElementById("player-one-table");
    let playerTwoTable = document.getElementById("player-two-table");
    playerTwoTable.innerText += gametype;
    playerOneTable.innerText += gametype;
}

setEventListeners();


