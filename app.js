/* 
Lo siguiente va en la terminal:

npm i prompt-sync

*/
const prompt = require("prompt-sync")({ sigint: true });

/*
//let nombre = prompt("Ingrese su nombre: "); //el prompr siempre arroja un tipo de dato string
//console.log(`Hola ${nombre} !!!`);


//let nombre = parseInt(prompt("Ingrese su edad: ")); //Convierte el valor a entero

//let nombre = parseFloat(prompt("Ingrese su deuda: ")); //Convierte el valor a decimal


//Ejercicio de Viaje a la fiambrería/embutería 
let temperatura = parseFloat(prompt("Ingrese la temperatura: "));
let lloviendo = prompt("¿Está lloviendo?: ");
let pisoAscensor = parseInt(prompt("Ingrese el piso del ascensor: "));
let horaActual = parseInt(prompt("Ingrese la hora actual: "));
let horaAperturaFiambreria = 8;
let horaCierreFiambreria = 18;
let cantidadQueso = parseFloat(prompt("Ingrese la cantidad de queso: "));
let deudaMonica = cantidadQueso * 5;
console.log(`La deuda con Monica es de ${deudaMonica}`);


//Ejercicio imaginario 1
let genero = prompt("Ingrese su género: ");
let edad = parseInt(prompt("Ingrese su edad: "));
let nivelAcademico = prompt("Ingrese su nivel academico: ")
let añoexperiencia = parseInt(prompt("Ingrese la cantidad de años de experiencia: "));


//Ejercicio imaginario 2
let mascota = prompt("¿Tienes mascotas: ");
if (mascota == "si" || mascota == "Si"){
    let cantidadmascota = parseInt(prompt("¿Cuántas mascotas tienes?: "));
} else mascota = prompt("¿Deseas tener mascota: ");


//Desafío extra
let cajonremeras = null;
let cajonpantalon = "remeras";

if (cajonremeras != "remeras") {cajonpantalon = "null"; cajonremeras = "remeras"}
else console.log("Esta organizado");

console.log("Cajon Remera:", cajonremeras);
console.log("Cajon Pantalon:", cajonpantalon);
*/

/*
let tipoParametro = parametro => {
    parametro = prompt("Ingrese algo: ");
    tipo = typeof parametro;
    return "El tipo de dato ingresado es: " + tipo}

console.log(tipoParametro(12))

*/

/*
base = prompt("Ingrese el tipo de proteina del sandwich: ");
pan = prompt("Ingrese el tipo de pan: ");


function totalAPagar(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let precio_base, precio_pan, precio_adicional = 0;
    console.log(pan)
    switch (base) {
        case "pollo":
            precio_base = 150;
            break;
        case "carne":
            precio_base = 200;
            break;
        case "vegetariano":
            precio_base = 100;
            break;
        default:
            console.log("No existe el tipo de proteína seleccionado.");
            return 0;
    }

    switch (pan) {
        case "blanco":
            precio_pan = 50
            break;
        case "oregano":
            precio_pan = 50
            break;
        case "parmesano":
            precio_pan = 50
            break;
        case "negro":
            precio_pan = 60
            break;
        case "avena":
            precio_pan = 60
            break;
        case "sin gluten":
            precio_pan = 75
            break;
        default:
            precio_pan = 0
            console.log("No existe")
            break;
    }

    if (queso) precio_adicional += 20; //Si es una sola linea si me lee el if así sin necesidad del {}
    if (tomate) precio_adicional += 15;
    if (lechuga) precio_adicional += 10;
    if (cebolla) precio_adicional += 15;
    if (mayonesa) precio_adicional += 5;
    if (mostaza) precio_adicional += 5;

    return precio_base + precio_pan + precio_adicional;
}

const precioTotal = totalAPagar(base, pan, false, false, false, false, false, false);
console.log("Total a pagar: $" + precioTotal);

*/

/*
function noParesDeContarImparesHasta(numero){
    let impar =0
    for (let i=1;i<=numero; i++){
        if (i%2 !==0){
            impar++
        }
    }
    return impar
}
cantidadimpares =noParesDeContarImparesHasta(5)
console.log(cantidadimpares)
*/

/*
function tablaDeMultiplicar(numero) {
	let i = 1;
	while (i <= 10) {
		console.log(numero + " * " + i + " = " + numero * i);
		i++;
	}
}

tablaDeMultiplicar(5);
*/

/*
function loro(texto) {
    for (let i = 1; i <= 5; i++) {
        console.log(texto);
    }
}

loro("hola");
*/

/*
numero = parseInt(prompt("Ingrese un valor: "))
i=1
while (i <= 10){
    numero ++
    console.log(numero)
    i++
}
*/

/*
for (let i = 5; i<=20; i+=3){
    console.log(i)
}
*/

/*
i=0
sumatoria=0
while (i<=100){
    sumatoria +=i
    i++
}
console.log(sumatoria)
*/

/*
numero = parseInt(prompt("Ingrese un numero entero positivo: "))

function factorial(numero) {
    while (numero<0){
        numero = parseInt(prompt("El número debe ser positivo. Ingrese un numero entero positivo: "))
    }
    if (numero === 0 || numero === 1) {
        return 1
    } else {
        let resultado = 1
        for (let i = 2; i <= numero; i++) {
            resultado *= i
        }
        return resultado
    }
}

console.log(factorial(numero))
*/

/*
numero = parseInt(prompt("Ingrese un numero: "))

function fibonacci(numero) {
}

*/

/*

let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])

*/

/*
let pelicula = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
//console.log(pelicula[2])

let nuevaLista = []
for (let i = 0; i<pelicula.length; i++) {
    nuevaLista.push(pelicula[i].toUpperCase());
}
//console.log(nuevaLista);

let pelicula2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let borrar = pelicula2.pop()
console.log(borrar)


function agregar(uno, dos){
    for (let i = 0; i<dos.length; i++) {
        uno.push(dos[i].toUpperCase());}
}

agregar(nuevaLista, pelicula2)
console.log(nuevaLista);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

comparador = []
function comparar (uno, dos){
    for (let i = 0; i<nuevaLista.length; i++){
        comparador.push(uno[i]===dos[i])
    }

}

comparar(asiaScores,euroScores)
console.log(comparador)
*/

/*
let frase = 'Hola!, soy Carli';
let licencia = frase.slice(11)
console.log(licencia)
*/

//la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];


let banco = {
    clientes: arrayCuentas,

    logs(){console.log(this)},

    consultarCliente: function(titular) {
        for (let i=0; i<this.clientes.length;i++)
            if (this.clientes[i].titularCuenta === titular){
                return this.clientes[i]}
    },
    deposito: function(titular, cantidad){
        for (let i=0; i<this.clientes.length;i++)
            if (this.clientes[i].titularCuenta === titular){
                let cuenta = this.clientes[i].nroCuenta
                let saldo = this.clientes[i].saldoEnPesos + cantidad
                this.clientes[i].saldoEnPesos = saldo
                console.log("Depósito realizado a su cuenta", cuenta, "y su nuevo saldo es:", saldo)
                return saldo}
    },
    extraccion: function(titular, retirar){
        for (let i=0; i<this.clientes.length;i++)
            if (this.clientes[i].titularCuenta === titular){
                let cuenta = this.clientes[i].nroCuenta
                let saldo = this.clientes[i].saldoEnPesos - retirar
                this.clientes[i].saldoEnPesos = saldo
                console.log("Retiro realizado a su cuenta", cuenta, "y su nuevo saldo es:", saldo)
                return saldo}
    }
}

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);

let valorDepositado = banco.deposito("Ramon Connell", 500);
console.log(valorDepositado);

let valorRetiro = banco.extraccion("Ramon Connell", 100);
console.log(valorRetiro);
