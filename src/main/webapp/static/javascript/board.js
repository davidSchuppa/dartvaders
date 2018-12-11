function addEventListeners() {
    let elements = document.querySelectorAll('#dartboard #areas g path, #dartboard #areas g circle, #Bull, #Outer');
    for (element of elements) {
        element.addEventListener('click', countScore, event);
    }
}

function getId(event) {
    let id = event.target.getAttribute('id');
    return id;
}

function getDartValueFromID(event) {
    let id = getId(event);
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
}

function countScore(event) {
    let score = getDartValueFromID(event);
    substractScore(score);

}

function substractScore(score){
    console.log(score);
    let total = parseInt(document.getElementById('total').innerText);
    document.getElementById('total').innerText = total - score;
}


addEventListeners();