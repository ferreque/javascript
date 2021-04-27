//Variable
//Espacio de memoria donde guardo datos

var nombre='Eugenio';
let apellido='Perez';
const pi=3.14;

//Tipos de datos

//String
let cliente='Perez';

//Number (enteros, decimales, negativos)
let numero1=34;
let numero2=6.34;
let numero3=-44;

//Boolean (verdadero falso)
let comprar=true;
let comer=false;

//null (valor vacío, nulo)
let billetera=null;

//undefined (variables vacías)
let caja;

//array (variables con varios elementos)
let arreglo=[1, 'martin', 5.23, false];

//object (variable con propiedades con valores determinados)
let persona={
    nombre:'José',
    apellido:'Cruz',
    edad: 33,
};

//operadores 
//aritmeticos (+ - / * %(resto))
let suma= numero1+numero2;
let resta= numero2-numero1;
let multiplicacion= numero1*numero3;
let division= numero1 / numero2;
let resto =numero1%numero2;
//unitarios 
++numero1;
--numero1;
//relacionales
console.log(numero1==numero2);
console.log(numero1!=numero2);

console.log('Hola mundo');

console.log('El resultado de la suma es ' + suma);

//Negación
let verdadero=true;
console.log(!verdadero);


let valor=prompt('ingrese su nombre');