"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, edad, nombreReal) {
        this.nombre = nombre;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger('Antman', 22, 'juanito');
console.log(antman);
