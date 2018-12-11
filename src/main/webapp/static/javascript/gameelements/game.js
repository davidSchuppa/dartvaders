let game = {
    _doubles: 0,
    _triples: 0,
    _highestTurn: 0,
    _leg: 0,
    _round: 0,
    _winner: null,


    setEventListeners: function () {
        $(".play").click(game.letsPlay);
    },

    letsPlay: function () {
        let playerOne = document.getElementById("p1-name").value;
        let playerTwo = document.getElementById("p2-name").value;
        let gametype = document.getElementById("gametype").value;
        let playerOneTable = document.getElementById("p1-score");
        let playerTwoTable = document.getElementById("p2-score");


        playerTwoTable.innerText += gametype;
        playerOneTable.innerText += gametype;
    },

};