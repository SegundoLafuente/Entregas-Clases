alert("Bienvenidos a mi Sitio")
if(confirm("¿Esta seguro de que quiere Avanar?")){
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita"

    let nombre = prompt("Nombre:")
    document.querySelector("h1").innerText = "Bienvenido " + nombre

    let edad = prompt("Edad: ")
    if (edad>17){
        let programacion = confirm("¿Te gusta la programacion?")
        if (programacion){
            document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg'/>"
        }
        else{
            document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg'/>"
        }

        let imagen = document.querySelector(".avatar")
        let nuevaImagen = prompt("Link de su IMG: ")
        imagen.src =  nuevaImagen 

        nombreA = prompt("Nombre pelicula: ")
        directorA = prompt("Director pelicula: ")
        duracionA = prompt("Duración pelicula: ")
        actorA = prompt ("Actor pelicula: ")
        
        let pelicula = {
            nombre: nombreA,
            director: directorA,
            duracion: duracionA,
            actor: actorA,
        }

        document.querySelector("#nombre").innerHTML = pelicula.nombre
        document.querySelector("#director").innerHTML = pelicula.director
        document.querySelector("#duracion").innerHTML = pelicula.duracion
        document.querySelector("#actor").innerHTML = pelicula.actor

        document.querySelector("#pelicula").style.display = "block";

    }
    else{
        document.querySelector(".container-general").style.display = "none";
        document.querySelector("#accesoDenegado").style.display = "block";
    }
}
else{
    document.querySelector(".saludo") = "Lamentamos que no quieras continuar tu visita"
}
