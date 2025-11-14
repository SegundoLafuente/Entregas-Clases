let peliculasFavoritas = ['Inception', 'Interstellar', 'Django'];


let peliculasJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem('favoritos', peliculasJson)

console.log(localStorage)

let recuperoStorage = localStorage.getItem('favoritos');

let original = JSON.parse(recuperoStorage)
console.log(original)

peliculasFavoritas.push('Shawshank Redemption')

console.log(peliculasFavoritas)

let nuevaListaJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem('favoritos', nuevaListaJson)