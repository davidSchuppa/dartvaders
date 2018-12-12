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
        let p1Name = document.getElementById("p1-name").value;
        let p2Name = document.getElementById("p2-name").value;
        let gametype = document.getElementById("gametype").value;
        let legs = document.getElementById("legs").value;

        game.sendInformation(p1Name, p2Name, gametype, legs);
    },

    sendInformation: function (p1Name, p2Name, gametype, legs) {
        console.log("Here we are");
        $.post("/create-game", {p1Name:p1Name, p2Name:p2Name, gametype:gametype, legs:legs});
    }

};