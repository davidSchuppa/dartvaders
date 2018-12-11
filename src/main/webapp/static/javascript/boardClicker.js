const logContainer = $("#log");
const log = (string) => { logContainer.prepend(`${string}<br/>`) }

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

    const middle = [width/2, height/2];

    const id = target.attr('id');
    console.log(id);
    if(id == 'outer-1') {
        console.log('!')
        subtract(1);
    }
}