const prompt = require("prompt-sync")({ sigint: true });

/* 

Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

*/

let misMascotas = [
    {
    nombre: "Luna",
    raza: "Husky siberiano",
    edad: 12, 
    sonido: "Wua",
    },
    {
    nombre: "Kitty",
    raza: "Husky siberiano",
    edad: 7, 
    sonido: "Miau",
    },
    {
        nombre: "Klein",
        raza: "Lohmann Brown",
        edad: 2, 
        sonido: "Pio",
    }
]

let ejecucion = {
    mascotas: misMascotas,

    ladrido: function(nombre){
        for (let i=0; i < this.mascotas.length;i++){
            if (this.mascotas[i].nombre === nombre){
                return this.mascotas[i].sonido + " " + this.mascotas[i].sonido}}
        return "Nombre de mascota no encontrada"},
            

    aumentarEdad: function(){
        let resultado = []
        for (let i=0; i < this.mascotas.length; i++){
            this.mascotas[i].edad++
            resultado.push({ nombre: this.mascotas[i].nombre, edad: this.mascotas[i].edad })
        }
        return resultado
    },

    aumentarEdad2: function(nombre){
        for (let i=0; i < this.mascotas.length; i++){
            edadMascota = this.mascotas[i].edad
            if (this.mascotas[i].nombre === nombre){
                if (edadMascota < 6) {return this.mascotas[i].edad++}
                else if (edadMascota <= 10) {return this.mascotas[i].edad += 2}
                else {return this.mascotas[i].edad += (edadMascota/2)}}}},
    id: function (){
        for (let i = 0; i < this.mascotas.length; i++) {
            this.mascotas[i].id = i + 1
        }
        return this.mascotas}
}

mascota = prompt("Ingrese el nombre de su mascota: ")
console.log(ejecucion.ladrido(mascota))
console.log(ejecucion.aumentarEdad())
console.log(ejecucion.aumentarEdad2(mascota))
console.log(ejecucion.id())
