"use strict";
var flash = {
    nombre: 'Barry Allen',
    edad: 24,
    humano: true,
    poderes: ['correr rapido', 'viajar x el tiempo', 24],
    getNombre: function () {
        return this.nombre;
    }
};
var superman = {
    nombre: 'Clark Kent',
    edad: 400,
    humano: false,
    poderes: ['volar', 'fuerza', 'laser', 57],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(flash);
console.log(superman);
