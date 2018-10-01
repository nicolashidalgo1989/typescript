//Dato
let myString:string = 'Hola Mundo';
let myNumber:number = 22;
let myBoolean:boolean = false;

//Array
let myArray:any[] = ['hola', 22, true, {}, []];
let myArrayString:string[] = ['hola', 'mundo'];
let myArrayNumber:number[] = [1, 2, 3, 4, 5];
let myArrayBoolean:boolean[] = [true, false];

//Tuple
let myTuple:[ string, number ]; //defined mas de un tipo de dato especificos a la variable
myTuple = ['hola', 22];

//void, undefined, null
let myVoid:void = undefined;
let myNull:null = null;
let myUndefined:undefined = undefined;

//functions
function sumar(num1:number, num2:number){
    return num1 + num2;
};

let sumarDatos = function( num1:number|string, num2:number|string ):number {

    if(typeof(num1) === 'string') { 
        num1 = parseInt(num1); 
    }
    
    if(typeof(num2) === 'string'){
        num2 = parseInt(num2);
    }
    
    return num1 + num2; 

}

let resultado = sumarDatos(1,2);
//console.log(resultado);

function miNombre( primerNombre:string, apellido?:string):string { //segundo parametro es opcional par?:
    
    if( apellido === undefined ) {

        return `${primerNombre}`;

    } else {
        
        return `${primerNombre} ${apellido}`;

    }

}

let nombreCompleto = miNombre('Nicolas','Hidalgo');
//console.log(nombreCompleto);

function myVoidFunction():void {
    return;
}

//Interfaces
interface ITodo {
    title:string;
    desc:string;
};

function showTodo(todo:ITodo){
    console.log(`${todo.title} : ${todo.desc}`);
}

let myTodo:ITodo = {title: 'Tarea 1', desc: 'Comprar materiales'};

showTodo(myTodo);

//classes
class User{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    register(){
        console.log(`${usuario.name} is registered.`)
    }
    showAge(){
        return usuario.age;
    }
};
let usuario = new User('Nicolas',29);
console.log(usuario.showAge());