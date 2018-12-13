let game = {
    _doubles: 0,
    _triples: 0,
    _leg: 1,
    _round: 1,
    _turnCounter: 0,
    _p1HighestTurn: 0,
    _p2HighestTurn: 0,
    _actualPlayer: "p1",
    _turnScore: 0,
    _pointRemaining: document.getElementById("gametype").value,
    _winner: null,
    _avgPerDart: 0,
    _avgPerRound: 0,
    _playerTurnOriginalScore: 0,


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
                window.location.href = "/";
            }
        );
        // window.location("index.html");
    },

    registerTurn: function (score, event) {
        game._turnCounter++;
        // console.log("turn counter: " + game._turnCounter);
        if (game._turnCounter == 1) {
            game._playerTurnOriginalScore = parseInt(document.getElementById(game._actualPlayer + "-score").innerText);
        }
        let playerOriginalScore = parseInt(document.getElementById(game._actualPlayer + "-score").innerText);
        let playerScoreDiv = document.getElementById(game._actualPlayer + "-score");
        let playerActualScore = document.getElementById(game._actualPlayer + "-actualRound");
        if (game.isThrowValid(playerOriginalScore, score, event)) {
            game._turnScore += score;
            playerActualScore.innerText = game._turnScore;
            console.log("Turn score: " + game._turnScore);
            game._pointRemaining = playerOriginalScore - score;
            playerScoreDiv.innerText = game._pointRemaining;
            if (game._turnCounter == 3) {
                game._round = parseInt(document.getElementById("game-round").innerText.substr(5));
                game.calculateAndSetAverage();
                game.saveStats();
            }
            if (game._pointRemaining === 0) {
                if (game.checkWin(event)) {
                    game.saveStats();
                    game.win();
                } else {
                    game._pointRemaining = game._playerTurnOriginalScore;
                }
            }
            playerScoreDiv.innerText = game._pointRemaining;
        } else {
            playerScoreDiv.innerText = game._playerTurnOriginalScore;
        }
        game.setHighestTurn();
        game.changePlayer(playerOriginalScore, score);
        // console.log("Actual player: " + game._actualPlayer);
        // console.log("P1 highest turn: " + game._p1HighestTurn);
        // console.log("P2 highest turn: " + game._p2HighestTurn);
    },

    isThrowValid: function (originalPoints, throwScore, event) {
        let id = board.getId(event);
        return (originalPoints - throwScore) >= 2 || ((originalPoints - throwScore == 0) && (id[0] == 'd'));
    },

    win: function () {
        let winner = document.getElementById(game._actualPlayer + "-win");
        winner.innerHTML = `<h1>"Winner!!!"</h1>`;
        setTimeout(function () {
            winner.innerHTML = '';
        }, 1000);
        console.log(game._actualPlayer + " won");
        game.newGame();
    },

    outOfBoard: function () {
        console.log("Throw is out of board");
    },

    checkWin: function (event) {
        let id = board.getId(event);
        if (id[0] == 'd' && game._pointRemaining === 0) {
            return true;
        }
        return false;
    },

    changePlayer: function (originalScore, score) {
        if (game._turnCounter === 3 || !game.isThrowValid(originalScore, score, event)) {
            game._round = parseInt(document.getElementById("game-round").innerText.substr(5));
            if (game._actualPlayer === "p1") {
                game._actualPlayer = "p2";
                document.getElementById("p1-nameH1").style.color = "white";
                document.getElementById("p2-nameH1").style.color = "rgb(79, 153, 98)";
                game.revertTurnStats();
            } else {
                game._actualPlayer = "p1";
                game._round++;
                document.getElementById("game-round").innerText = "Round " + game._round;
                document.getElementById("p2-nameH1").style.color = "white";
                document.getElementById("p1-nameH1").style.color = "rgb(79, 153, 98)";
                game.revertTurnStats();
            }
        }
    },

    calculateAndSetAverage: function () {
        let playerOriginalAvgPerDart = document.getElementById(game._actualPlayer + "-avgperdart");
        let playerOriginalAvgPerRound = document.getElementById(game._actualPlayer + "-avgperround");
        game._avgPerDart = (((document.getElementById("gametype").value - game._pointRemaining) * 1.0 / game._round) / 3).toFixed(1);
        game._avgPerRound = (game._avgPerDart * 3).toFixed(1);
        playerOriginalAvgPerDart.innerText = game._avgPerDart;
        playerOriginalAvgPerRound.innerText = game._avgPerRound;
    },

    revertTurnStats: function () {
        game._pointRemaining = document.getElementById(game._actualPlayer + "-score");
        game._turnCounter = 0;
        game._turnScore = 0;
    },

    newGame: function () {
        game._pointRemaining = document.getElementById("gametype").value;
        game._turnCounter = 0;
        game._turnScore = 0;
        game._round = 1;
        game._avgPerDart = 0;
        game._avgPerRound = 0;
        game._p1HighestTurn = 0;
        game._p2HighestTurn = 0;
        document.getElementById("p1-bestOf").innerText = game._p1HighestTurn;
        document.getElementById("p2-bestOf").innerText = game._p2HighestTurn;
        document.getElementById("p1-score").innerText = game._pointRemaining;
        document.getElementById("p2-score").innerText = game._pointRemaining;
        document.getElementById("game-round").innerText = "Round " + game._round;
        document.getElementById("p1-avgperdart").innerText = game._avgPerDart;
        document.getElementById("p1-avgperround").innerText = game._avgPerRound;
        document.getElementById("p2-avgperdart").innerText = game._avgPerDart;
        document.getElementById("p2-avgperround").innerText = game._avgPerRound;
        document.getElementById("p1-actualRound").innerText = game._turnScore;
        document.getElementById("p2-actualRound").innerText = game._turnScore;

    },

    setHighestTurn: function () {
        if (game._actualPlayer == "p1") {
            if (game._turnScore > game._p1HighestTurn) {
                game._p1HighestTurn = game._turnScore;
                let p1bestOfThree = document.getElementById("p1-bestOf");
                p1bestOfThree.innerText = game._p1HighestTurn;
            }
        } else {
            if (game._turnScore > game._p2HighestTurn) {
                game._p2HighestTurn = game._turnScore;
                let p2bestOfThree = document.getElementById("p2-bestOf");
                p2bestOfThree.innerText = game._p2HighestTurn;
            }
        }
    },

    saveStats: function () {
        let playerName = document.getElementById(game._actualPlayer + "-nameH1").innerText;
        let bestOfThree;
        if (game._actualPlayer == "p1") {
            bestOfThree = game._p1HighestTurn;
        } else {
            bestOfThree = game._p2HighestTurn;
        }
        if (game.checkWin(event)) {
            game._winner = playerName;
        }
        $.post('/turn', {
            round: game._round,
            player: playerName,
            actualScore: game._turnScore,
            bestOfThree: bestOfThree,
            pointRemaining: game._pointRemaining,
            numberOfDoubles: game._doubles,
            numberOfTriples: game._triples,
            winner: game._winner,
            actualLeg: game._leg,
            avgPerDart: game._avgPerDart,
            avgPerRound: game._avgPerRound
        })
    }

};