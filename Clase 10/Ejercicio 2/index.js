let peliculasFavoritas = ['Inception', 'Interstellar', 'Django'];

let pelisFav_toString = JSON.stringify(peliculasFavoritas)

let peliculaFavorita = peliculasFavoritas[1]
localStorage.setItem('peliFav', peliculaFavorita)
console.log(localStorage)

let recuperoStorage = localStorage.getItem(peliculaFavorita)
console.log(recuperoStorage)

let storageRecuperado = JSON.parse(recuperoStorage)

localStorage.clear();