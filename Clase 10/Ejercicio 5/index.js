let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = []

for (let i =0; i<got.length; i++){
    if (got[i].ciudad == "Winterfell")
    winterIsComing.push(got[i])
}

let winterJson = JSON.stringify(winterIsComing);
localStorage.setItem('winterfell', winterJson)
console.log(localStorage)