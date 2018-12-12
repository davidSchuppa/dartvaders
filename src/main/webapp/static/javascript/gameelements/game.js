let game = {
    _doubles: 0,
    _triples: 0,
    _leg: 0,
    _round: 0,
    _turnCounter: 0,
    _p1HighestTurn: 0,
    _p2HighestTurn: 0,
    _actualPlayer: "p1",
    _turnScore: 0,
    _pointRemaining: document.getElementById("gametype").value,
    _winner: null,


    setEventListeners: function () {
        $(".play").click(game.getGameInformation);
    },

    getGameInformation: function () {
        let p1Name = document.getElementById("p1-name").value;
        let p2Name = document.getElementById("p2-name").value;
        let gametype = document.getElementById("gametype").value;
        let legs = document.getElementById("legs").value;

        game.sendInformation(p1Name, p2Name, gametype, legs);
    },

    sendInformation: function (p1Name, p2Name, gametype, legs) {
        console.log("Game created.");
        // $.post("/create-game", {p1Name: p1Name, p2Name: p2Name, gametype: gametype, legs: legs});
        $.post('/create-game',
            {p1Name: p1Name, p2Name: p2Name, gametype: gametype, legs: legs},
            function () {
                window.location.href = "index.html";
            }
        );
        // window.location("index.html");
    },

    registerTurn: function (score) {
        game._turnCounter++;
        console.log("turn counter: " + game._turnCounter);

        let playerOriginalScore = parseInt(document.getElementById(game._actualPlayer + "-score").innerText);
        let playerScoreDiv = document.getElementById(game._actualPlayer + "-score");
        if (game.isThrowValid(playerOriginalScore, score)) {
            game._turnScore += score;
            console.log("Turn score: " + game._turnScore);
            game._pointRemaining = playerOriginalScore - score;
            playerScoreDiv.innerText = game._pointRemaining;
            if (game.checkWin()) {
                console.log(game._actualPlayer + " won");
            }
        }
        game.setHighestTurn();
        game.changePlayer();
        console.log("Actual player: " + game._actualPlayer);
        console.log("P1 highest turn: " + game._p1HighestTurn);
        console.log("P2 highest turn: " + game._p2HighestTurn);
    },

    isThrowValid: function (originalPoints, throwScore) {
        return (originalPoints - throwScore) >= 2 || (originalPoints - throwScore == 0);
    },

    outOfBoard: function () {
        console.log("Throw is out of board");
    },

    checkWin: function () {
        return game._pointRemaining === 0;
    },

    changePlayer: function () {
        if (game._turnCounter === 3) {
            if (game._actualPlayer === "p1") {
                game._actualPlayer = "p2";
                game.revertTurnStats();
            } else {
                game._actualPlayer = "p1";
                game.revertTurnStats();
            }
        }
    },

    revertTurnStats: function () {
        game._pointRemaining = document.getElementById(game._actualPlayer + "-score");
        game._turnCounter = 0;
        game._turnScore = 0;
    },

    setHighestTurn: function () {
        if (game._actualPlayer == "p1") {
            if (game._turnScore > game._p1HighestTurn) {
                game._p1HighestTurn = game._turnScore;
            }
        } else {
            if (game._turnScore > game._p2HighestTurn) {
                game._p2HighestTurn = game._turnScore;
            }
        }
    }

    //TODO
    /**Send to java parameters called:
     *          ACTUAL PLAYER NAME!
     *          actualScore
     *          bestOfThree
     *          pointRemaining
     *          legsWon
     *          actualLeg
     *          highestTurn
     *          numberOfDoubles
     *          numberOfTriples
     */

};