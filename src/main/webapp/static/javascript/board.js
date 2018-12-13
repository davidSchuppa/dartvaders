let board = {

    addEventListeners: function () {
        let elements = document.querySelectorAll('#dartboard #areas g path, #dartboard #areas g circle, #Bull, #Outer, #board');
        for (element of elements) {
            element.addEventListener('click', board.countScore, event);
        }
    },

    getId: function (event) {
        let id = event.target.getAttribute('id');
        return id;
    },

    getDartValueFromID: function (event) {
        let id = board.getId(event);
        if (!id) {
            console.log("Throw is out of board");
            game.outOfBoard();
            return 0;
        }

        if (id == 'Bull') {
            game._doubles++;
            return 50;
        }
        if (id == 'Outer') return 25;

        let mod = 0;
        switch (id[0]) {
            case 's':
                mod = 1;
                break;
            case 'd':
                game._doubles++;
                mod = 2;
                break;
            case 't':
                game._triples++;
                mod = 3;
                break;
            default:
                mod = 1;
        }
        return mod * parseInt(id.substr(1));
    },

    countScore: function (event) {
        let score = board.getDartValueFromID(event);
        game.registerTurn(score);
    },

    substractScore: function (score) {
        console.log(score);
        board.sendTurnInformation(score);
    },

    // sendTurnInformation: function(score) {
    //     $.post("/turn", {actualScore:score});
    // }
};
