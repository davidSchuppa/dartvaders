const logContainer = $("#log");
const log = (string) => {
    logContainer.prepend(`${string}<br/>`)
}

$("#svg").on('click', onHandleClick)

let value = 501;
$("#value").html(value);

function subtract(diff) {
    console.log('subtract', diff);
    value -= diff;
    $("#value").html(value);
}

function onHandleClick(event) {
    // console.log(event);

    /*

            p
            |
            |
            |_________m
    */

    const target = $(event.target);

    const x = event.clientX;
    const y = event.clientY;

    const width = $("#svg").width();
    const height = $("#svg").height();

    const middle = [width / 2, height / 2];

    let id = target.attr('id');
    console.log(id);
    if (id.indexOf('T') != -1) {
        let number = id.slice(1);
        id = parseInt(number) * 3;
    } else if (id.indexOf('D') != -1) {
        let number = id.slice(1);
        id = parseInt(number) * 2;
    }
    subtract(parseInt(id));
}