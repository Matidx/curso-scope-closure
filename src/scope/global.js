//variables

var a; //declarando
var b = 'b'; //declaramos / asignamos
b = 'bb'; //reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; //variable declarada y asignada - global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country);