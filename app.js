"use strict";
//Dato
var myString = 'Hola Mundo';
var myNumber = 22;
var myBoolean = false;
//Array
var myArray = ['hola', 22, true, {}, []];
var myArrayString = ['hola', 'mundo'];
var myArrayNumber = [1, 2, 3, 4, 5];
var myArrayBoolean = [true, false];
//Tuple
var myTuple; //defined mas de un tipo de dato especificos a la variable
myTuple = ['hola', 22];
//void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//functions
function sumar(num1, num2) {
    return num1 + num2;
}
;
var sumarDatos = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
var resultado = sumarDatos(1, 2);
//console.log(resultado);
function miNombre(primerNombre, apellido) {
    if (apellido === undefined) {
        return "" + primerNombre;
    }
    else {
        return primerNombre + " " + apellido;
    }
}
var nombreCompleto = miNombre('Nicolas', 'Hidalgo');
//console.log(nombreCompleto);
function myVoidFunction() {
    return;
}
;
function showTodo(todo) {
    console.log(todo.title + " : " + todo.desc);
}
var myTodo = { title: 'Tarea 1', desc: 'Comprar materiales' };
showTodo(myTodo);
//classes
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(usuario.name + " is registered.");
    };
    User.prototype.showAge = function () {
        return usuario.age;
    };
    return User;
}());
;
var usuario = new User('Nicolas', 29);
console.log(usuario.showAge());
