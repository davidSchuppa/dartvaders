let game = {
    _doubles: 0,
    _triples: 0,
    _highestTurn: 0,
    _leg: 0,
    _round: 0,
    _winner: null,


    setEventListeners: function () {
        $(".play").click(game.getGameInformation);
    },

    getGameInformation: function () {
        let playerOne = document.getElementById("p1-name").value;
        let playerTwo = document.getElementById("p2-name").value;
        let gametype = document.getElementById("gametype").value;
        let playerOneTable = document.getElementById("p1-score");
        let playerTwoTable = document.getElementById("p2-score");
        let playerOneToDiv = `<div><h1>${playerOne}</h1></div>`;
        let playerTwoToDiv = `<div><h1>${playerTwo}</h1></div>`;
        let scoreDiv = `<div><h2>${gametype}</h2></div>`;
        dom.appendToElement(playerOneTable, playerOneToDiv);
        dom.appendToElement(playerTwoTable, playerTwoToDiv);
        dom.appendToElement(playerOneTable, scoreDiv);
        dom.appendToElement(playerTwoTable, scoreDiv);

    }



};