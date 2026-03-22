var x, y;

const input = document.getElementById("input");
input.addEventListener('input', updateValue);

function updateValue(event){
    x = Number(event.target.value);
}

function init() {
$.get("/init", function(data) {
    x = data.init_x;
    y = data.init_y;
    document.getElementById("result").innerText = y;
    input.value = y;
});
}
init();

function add() {
$.post("/add",
    { x: x, y: y },
function (data, status) {
    y = data.result;
    document.getElementById("result").innerText = y;
});
}

function subtr() {
$.post("/subtr",
    { x: x, y: y },
function (data, status) {
    y = data.result;
    document.getElementById("result").innerText = y;
});
}

function multi() {
$.post("/multi",
    { x: x, y: y },
function (data, status) {
    y = data.result;
    document.getElementById("result").innerText = y;
});
}

function div() {
$.post("/div",
    { x: x, y: y },
function (data, status) {
    y = data.result;
    document.getElementById("result").innerText = y;
});
}

function equals() {
$.post("/result",
    { x: x, y: y },
function (data, status) {
    y = data.result;
    x = y;
    document.getElementById("result").innerText = y;
    input.value = y;
});
}