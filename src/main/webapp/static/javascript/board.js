let board = {

    addEventListeners: function () {
        let elements = document.querySelectorAll('#dartboard #areas g path, #dartboard #areas g circle, #Bull, #Outer');
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
        if (!id) return 0;

        if (id == 'Bull') return 50;
        if (id == 'Outer') return 25;

        let mod = 0;
        switch (id[0]) {
            case 's':
                mod = 1;
                break;
            case 'd':
                mod = 2;
                break;
            case 't':
                mod = 3;
                break;
            default:
                mod = 1;
        }
        return mod * parseInt(id.substr(1));
    },

    countScore: function (event) {
        let score = board.getDartValueFromID(event);
        board.substractScore(score);
    },

    substractScore: function (score) {
        console.log(score);
        board.sendTurnInformation(score);
    },

    sendTurnInformation: function(score) {
        $.post("/turn", {actualScore:score});
    }
};
