let miNombre = "Segundo";

localStorage.setItem('username','miNombre');
console.log(localStorage)

let recuperoStorage = sessionStorage.getItem('username');
console.log(recuperoStorage)

localStorage.clear();