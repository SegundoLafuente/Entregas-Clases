let nacionalidadA = prompt("Nacionalidad: ")
let profesionA = prompt("Profesión: ")
let kmsRecorridosA = prompt("Cuantos KM caminas al Día: ")

function filosofoHipster(nacionalidad,profesion,kmsRecorridos){
    if (nacionalidad== "Argentina" && profesion==="Musico" && kmsRecorridos > 2){
        return "Soy un filósofo hipster"
    }
    else{
        return "Aún no soy filósofo hipster"
    }
}

console.log(filosofoHipster(nacionalidadA,profesionA,kmsRecorridosA))