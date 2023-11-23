const prompt = require("prompt-sync")({ sigint: true });


//Ejercicio 1
function par(uno,dos){
    if (uno %2 ===0 && dos%2===0){
        return uno + dos
    } else if (uno %2 ===0 || dos%2===0){
        return uno * dos
    } else {
        return "ninguno es par"
    }
}
console.log(par(3,5))


//Ejercicio 2

let ciclista = {
    nombre: "Erica",
    apellido: "Marquez",
    edad: 23,
    tieneBici: false
}

function competir(objeto){
    if (objeto.edad >= 18 && objeto.tieneBici ===true) {
        return "puede competir"}
    else if (objeto.edad < 18 && objeto.tieneBici ===true) {
        return "podrá competir pero con un adulto acompañante"}
    else {
        return "No podrá competir"
    }
}

console.log(competir(ciclista))


//Ejercicio 3

let historiasInconscientes = {
    anio  : 2013,
    autor : "Gabriel Rolón",
    paginas: 352
}
let elAlquimista = {
    anio  : 1988,
    autor : "Paulo Coehlo",
    paginas: 192
}
let elCampamento = {
    anio  : 2021,
    autor : "Blue Jeans",
    paginas: 480
}
let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
}

let libros = []

libros.push(historiasInconscientes)
libros.push(elAlquimista)
libros.push(elCampamento)
libros.push(operacionMasacre)

console.log(libros)

function asignarEpoca(array){
    for (let i=0; i < array.length; i++){
        if (array[i].anio < 2020){
            array[i].epoca = "pre-pandemia"
        } else{
            array[i].epoca = "post-pandemia"
        }
    }
    return array
}

console.log(asignarEpoca(libros))
