function setEventListeners() {
    $(".play").click(letsPlay);
}

function letsPlay() {
    let playerOne = document.getElementById("p1-name").value;
    let playerTwo = document.getElementById("p2-name").value;
    let gametype = document.getElementById("gametype").value;
    let playerOneTable = document.getElementById("p1-score");
    let playerTwoTable = document.getElementById("p2-score");


    playerTwoTable.innerText += gametype;
    playerOneTable.innerText += gametype;
}

// appendToElement: function (elementToExtend, textToAppend, prepend = false) {
//     let fakeDiv = document.createElement('div');
//     fakeDiv.innerHTML = textToAppend.trim();
//     for (childNode of fakeDiv.childNodes) {
//         if (prepend) {
//             elementToExtend.prepend(childNode);
//         } else {
//             elementToExtend.appendChild(childNode);
//         }
//     }
//
//     return elementToExtend.lastChild;
// },

setEventListeners();


