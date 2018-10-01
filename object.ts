type Heroe = {

  nombre:string,
  edad:number,
  humano:boolean,
  poderes:any[],
  getNombre:()=>string

};

let flash:Heroe = {

  nombre: 'Barry Allen',
  edad: 24,
  humano:true,
  poderes: ['correr rapido','viajar x el tiempo',24],
  getNombre(){
    return this.nombre;
  }
};

let superman:Heroe = {
  nombre: 'Clark Kent',
  edad: 400,
  humano:false,
  poderes: ['volar','fuerza','laser',57],
  getNombre(){
    return this.nombre;
  }
};

console.log(flash);
console.log(superman);
