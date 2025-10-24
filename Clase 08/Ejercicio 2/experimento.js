let nombre = prompt("Nombre: ")
console.log(nombre)

let edad = prompt("Edad: ")
console.log(edad)

let fanDeportes = confirm("¿Te gustan los deportes?")
console.log(fanDeportes)

let mensaje = " Muchas gracias " + nombre + " por responder nuestras preguntas "
alert(mensaje)

let usuario = {
    nombreA: nombre,
    edadA: edad,
    deportesA: fanDeportes,
    deportistaProfesional: function(){
        if (this.deportesA){
            return "Si, soy fan de los deportes"
        }
        else{
            return "No soy tan fan aún de los deportes"
        }
    }
}
console.log (usuario.deportistaProfesional())