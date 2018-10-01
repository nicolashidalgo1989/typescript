interface Xmen {
  nombre:string,
  poder:string
};

function enviarMision( xmen : Xmen ) {

  console.log('Enviando a ' + xmen.nombre + ' a una misioó.');

};

function enviarCuartel( xmen : Xmen ) {

  console.log('Enviando a ' + xmen.nombre + ' al cuartel.');

};

let wolverine:Xmen = {
  nombre:'wolverine',
  poder:'regeneracion'
};

enviarMision(wolverine);
enviarCuartel(wolverine);
