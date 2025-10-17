let misDatos = {
    nombre: "Segundo",
    apellido: "Lafuente",
    dni: "48586304",
    comidasFavoritas: ["Hamburguesa", "Pollo con Arroz y Salsita rica", "Pastel de carne"],
    saludar: function() {
        return "Hola mi nombre es " + this.nombre + this.apellido + " mi dni es " + this.dni + ". Mi primer comida favorita es" + this.comidasFavoritas[0];
    }
};
console.log (misDatos.saludar());

let auto = {
    marca: "Aston Martin",
    modelo: "DB12",
    año: 2024,
    color: "Verde Oscuro Mate",
    posicion: 0,
    avanzar: function(n){
        return this.posicion = this.posicion + n;
    },
    retroceder: function(n){
        return this.posicion = this.posicion - n
    }
};
auto.avanzar(6)
auto.retroceder(4)
console.log(auto.posicion)

let nuevoAuto = {
    marca: "Aston Martin",
    modelo: "DB12",
    año: 2024,
    color: "Verde Oscuro Mate",
    posicion: 0,
    moverse: function(n){
        return this.posicion = this.posicion + n
    }
};
nuevoAuto.moverse(7)
nuevoAuto.moverse(-2)
console.log(nuevoAuto.posicion)

let ironman = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(y){
    this.energia = this.energia - 10
    return "Poder elegido de SuperHeroe: " + this.poderes[y] + ".Energia restante: " + this.energia
    }
};

let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder : function(y){
        this.energia = this.energia - 10
        return "Poder elegido de SuperHeroe: " + this.poderes[y] + ".Energia restante: " + this.energia
    }
};

console.log (ironman.getPoder(1))
console.log (hulk.getPoder(0))
console.log (ironman.getPoder(2))
console.log (hulk.getPoder(1))
console.log (ironman.getPoder(1))
console.log (hulk.getPoder(2))