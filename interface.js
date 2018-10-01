"use strict";
;
function enviarMision(xmen) {
    console.log('Enviando a ' + xmen.nombre + ' a una misioó.');
}
;
function enviarCuartel(xmen) {
    console.log('Enviando a ' + xmen.nombre + ' al cuartel.');
}
;
var wolverine = {
    nombre: 'wolverine',
    poder: 'regeneracion'
};
enviarMision(wolverine);
enviarCuartel(wolverine);
