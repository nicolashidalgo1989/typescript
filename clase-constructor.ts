class Avenger {

  nombre:string;
  edad:number;
  nombreReal:string;

  constructor(nombre:string, edad:number, nombreReal:string){
    this.nombre = nombre;
    this.edad = edad;
    this.nombreReal = nombreReal;
  }

}
let antman:Avenger = new Avenger('Antman',22,'juanito');

console.log(antman);
