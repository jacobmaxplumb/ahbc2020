const title = document.getElementById('title1');

// document.getElementById('title1').addEventListener("event_type", handlerFunction);
title.addEventListener('click', logTheTitle);

document.addEventListener('scroll', thisFunction);

function thisFunction(event) {
    console.log(event);
}

function logTheTitle(event) {
    if (event.type === 'dbclick') {
        console.log('double clicked');
    }
    if (event.type === 'click') {
        console.log('clicked');
    }
    console.log(event);
}